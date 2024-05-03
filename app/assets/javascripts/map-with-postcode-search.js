document.addEventListener("DOMContentLoaded", function () {
  proj4.defs(
    "EPSG:27700",
    "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"
  );
  var map = L.map("map", { zoomSnap: 0, editable: true }).setView(
    [55.378052, -3.435973],
    5
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  // L.control
  //   .resetView({
  //     position: "topleft",
  //     title: "Reset view",
  //     latlng: L.latLng([55.378052, -3.435973]),
  //     zoom: 5,
  //   })
  //   .addTo(map);

  L.control.scale().addTo(map);
  map.addControl(new L.Control.Fullscreen());
  map.addControl(new L.Control.MiniMap(
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      toggleDisplay: true,
      position: 'topright',
      zoomLevelOffset:10,
    })
  ))

  var marker;
  var radius_circle;
  var bleed_circle;
  var tooltip = L.tooltip();
  var markerIcon = L.icon({
    iconUrl: "/public/images/marker-icon.png",
    iconSize: [40, 40],
  });

  var moveIcon = L.icon({
    iconUrl: "/public/images/move_icon.png",
    iconSize: [80, 80],
  });

  canCache = "caches" in window;

  map.on("editable:vertex:drag", function (e) {
    resetStyling();
    if (e.vertex.getIndex() == 0) {
      // Marker moved
      marker.setLatLng(radius_circle.getLatLng());
      bleed_circle.setLatLng(radius_circle.getLatLng());
      console.log("Marker moving");
    } else if (e.vertex.getIndex() == 1) {
      // Radius changed
      document.getElementById("radius").value = (
        radius_circle.getRadius() / 1000
      ).toFixed(1);
      tooltip.setContent((radius_circle.getRadius() / 1000).toFixed(1) + "km");
      bleed_circle.setRadius(radius_circle.getRadius() * 1.2);
    } else {
      console.log("Another vertex has been edited", e);
    }
  });

  map.on("editable:vertex:dragend", function (e) {
    if (e.vertex.getIndex() == 0) {
      // Changed marker
      if (canCache) {
        console.log("check cache");
        coords = getXYFromLatLng(
          marker.getLatLng().lat,
          marker.getLatLng().lng
        );
        console.log(coords);
        searchCoordinates(coords);
      } else {
        console.log("Caching not enabled");
        coords = getXYFromLatLng(
          marker.getLatLng().lat,
          marker.getLatLng().lng
        );
        searchCoordinates(coords);
        // must search as usual
      }
    } else if (e.vertex.getIndex() == 1) {
      // change radius
      map.fitBounds(bleed_circle.getBounds().pad(0.1));
    }
  });

  function resetStyling() {
    // document.getElementById("postcode").value = "";
    // document.getElementById("radius").value = "";
    document.getElementById("postcode").style.border = "2px solid #0b0c0c";
    document.getElementById("radius").style.border = "2px solid #0b0c0c";
    document.getElementById("error-postcode").style.display = "none";
    document.getElementById("error-radius").style.display = "none";
  }

  // ----------------------------------------------------

  async function searchPostcode() {
    var query = document.getElementById("postcode").value;
    // first validate that field isn't empty
    if (query) {
      url =
        "https://api.os.uk/search/places/v1/find?maxresults=1&query=" +
        query +
        "&key=x2pEKrtVsMPF6mfYGt5LJ8F9AQfg8qGX";
      // See if cache exists and if postcode is in cache - if cache is true then check
      if (canCache) {
        // search Cache
        getPostcodeAPI(url).then((data) => {
          if (data) {
            coords = getLatLngFromResponse(data);
            if (coords) {
              if (radius_circle && bleed_circle) {
                map.removeLayer(radius_circle);
                map.removeLayer(bleed_circle);
              }
              plotCoordinates(coords, markerIcon);
              resetStyling();
              marker.unbindTooltip();
              map.setView(coords, 13);
            } else {
              console.log("Unable to find results");
              document.getElementById("error-postcode").textContent =
                "Enter a correct location.";
              document.getElementById("postcode").value = "";
              document.getElementById("error-postcode").style =
                "color: #b10e1e";
              document.getElementById("error-postcode").style.fontWeight =
                "bold";
              document.getElementById("postcode").style.border =
                "4px solid #b10e1e";
              document.getElementById("error-postcode").style.display = "block";
            }
          }
        });
      } else {
        // Search normally, test with
        console.log("Searching normally");
        const response = await fetch(url);

        if (response.ok) {
          const responseData = await response.json();
          coords = getLatLngFromResponse(responseData);
          plotCoordinates(coords, markerIcon);
          marker.unbindTooltip();
          map.setView(coords, 13);
        } else {
          console.log("Not able to fetch postcode");
        }
      }
    } else {
      console.log("Enter a postcode!");
      // Display error styling
      document.getElementById("error-postcode").textContent =
        "Enter a postcode.";
      document.getElementById("error-postcode").style = "color: #b10e1e";
      document.getElementById("error-postcode").style.fontWeight = "bold";
      document.getElementById("postcode").style.border = "4px solid #b10e1e";
      document.getElementById("error-postcode").style.display = "block";
      return null;
    }
  }

  async function getPostcodeAPI(url) {
    const cache = await caches.open("my-cache");
    const cachedResponse = await cache.match(url);

    if (cachedResponse) {
      console.log("Response already in cache");
      const cachedData = await cachedResponse.json();
      return cachedData;
    } else {
      console.log("Searching for location then caching");
      try {
        const response = await fetch(url);

        if (response.ok) {
          const responseToCache = response.clone();
          await cache.put(url, responseToCache);
          const responseData = await response.json();
          return responseData;
        } else {
          console.log("Not able to fetch postcode");
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }

  async function getCoordinatesLocationAPI(url) {
    const cache = await caches.open("my-cache");
    const cachedResponse = await cache.match(url);

    if (cachedResponse) {
      console.log("Response already in cache");
      const cachedData = await cachedResponse.json();
      return cachedData;
    } else {
      console.log("Searching for postcode then caching");
      try {
        const response = await fetch(url);

        if (response.ok) {
          const responseToCache = response.clone();
          await cache.put(url, responseToCache);
          const responseData = await response.json();
          return responseData;
        } else {
          console.log("Not able to fetch postcode");
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }

  function getLatLngFromResponse(data) {
    if (data.results) {
      let result = data.results[0].DPA;
      let coords = proj4("EPSG:27700", "EPSG:4326", [
        result.X_COORDINATE,
        result.Y_COORDINATE,
      ]);
      return { lat: coords[1], lng: coords[0] };
    } else {
      console.log("No results");
      document.getElementById("error-postcode").textContent =
        "Unable to find postcode.";
      document.getElementById("postcode").value = "";
      document.getElementById("error-postcode").style = "color: #b10e1e";
      document.getElementById("error-postcode").style.fontWeight = "bold";
      document.getElementById("postcode").style.border = "4px solid #b10e1e";
      document.getElementById("error-postcode").style.display = "block";
      return null;
    }
  }

  function getXYFromLatLng(lat, lng) {
    let coords = proj4("EPSG:4326", "EPSG:27700", [lng, lat]);
    return { X: coords[0], Y: coords[1] };
  }

  function plotCoordinates(coordinates, icon) {
    map.panTo(coordinates);
    if (marker) {
      map.removeLayer(marker);
    }
    if (radius_circle && document.getElementById("radius").value) {
      tooltip.setContent((radius_circle.getRadius() / 1000).toFixed(1) + "km");
      marker = L.marker(coordinates, { icon: icon }).addTo(map);
      marker
        .bindTooltip(tooltip, {
          direction: "right",
          permanent: true,
          className: "tooltip",
          arrowColor: "transparent",
          offset: [25, 0],
        })
        .openTooltip();
    } else {
      marker = L.marker(coordinates, { icon: markerIcon }).addTo(map);
    }
  }

  function coordinatesToPostcode(data) {
    postcode = data.results[0].DPA.POSTCODE;
    document.getElementById("postcode").value = postcode;
  }

  async function searchCoordinates(coords) {
    // first validate that field isn't empty
    url =
      "https://api.os.uk/search/places/v1/nearest?point=" +
      coords.X +
      "," +
      coords.Y +
      "&key=x2pEKrtVsMPF6mfYGt5LJ8F9AQfg8qGX";
    // See if cache exists and if postcode is in cache - if cache is true then check
    if (canCache) {
      // search Cache
      getCoordinatesLocationAPI(url).then((data) => {
        if (data) {
          coords = getLatLngFromResponse(data);
          if (coords) {
            coordinatesToPostcode(data);
          }
        }
      });
    } else {
      // Search normally, test with
      console.log("Searching normally");
      const response = await fetch(url);
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        coords = getLatLngFromResponse(responseData);
        if (coords) {
          coordinatesToPostcode(responseData);
        }
        // pass into postcode field
      } else {
        console.log("Not able to find postcode from coordinates");
      }
    }
  }

  // ----------------------------------------------------

  function addRadius() {
    var radius = parseFloat(document.getElementById("radius").value);
    radius = radius * 1000;
    var query = document.getElementById("postcode").value;
    const url =
      "https://api.os.uk/search/places/v1/find?maxresults=1&query=" +
      query +
      "&key=x2pEKrtVsMPF6mfYGt5LJ8F9AQfg8qGX";
    if (query) {
      if (isNaN(radius) || radius <= 0) {
        console.log("Incorrect radius value");
        // document.getElementById("error-radius").textContent =
        //   "Enter a correct radius.";
        document.getElementById("radius").value = "";
        document.getElementById("error-radius").style = "color: #b10e1e";
        document.getElementById("error-radius").style.fontWeight = "bold";
        document.getElementById("radius").style.border = "4px solid #b10e1e";
        document.getElementById("error-radius").style.display = "block";
      } else if (radius) {
        getPostcodeAPI(url).then((data) => {
          if (data) {
            coords = getLatLngFromResponse(data);
            drawRadius(coords.lat, coords.lng, radius);
            drawBleed(coords.lat, coords.lng, radius);
            plotCoordinates(coords, moveIcon);
            map.fitBounds(bleed_circle.getBounds().pad(0.1));
          }
        });
      } else {
        document.getElementById("radius").style.border = "4px solid #b10e1e";
        document.getElementById("error-radius").style.display = "block";
      }
    } else if (!radius && !query) {
      document.getElementById("error-postcode").style = "color: #b10e1e";
      document.getElementById("error-postcode").style.fontWeight = "bold";
      document.getElementById("postcode").style.border = "4px solid #b10e1e";
      document.getElementById("error-postcode").textContent =
        "Enter a postcode.";
      document.getElementById("error-postcode").style.display = "block";

      // document.getElementById("error-radius").textContent = "Enter a radius.";
      document.getElementById("radius").value = "";
      document.getElementById("error-radius").style = "color: #b10e1e";
      document.getElementById("error-radius").style.fontWeight = "bold";
      document.getElementById("radius").style.border = "4px solid #b10e1e";
      document.getElementById("error-radius").style.display = "block";
    } else {
      document.getElementById("error-postcode").style = "color: #b10e1e";
      document.getElementById("error-postcode").style.fontWeight = "bold";
      document.getElementById("postcode").style.border = "4px solid #b10e1e";
      document.getElementById("error-postcode").textContent =
        "Enter a postcode.";
      document.getElementById("error-postcode").style.display = "block";
    }
  }

  function drawRadius(lat, lng, radius) {
    if (radius_circle) {
      map.removeLayer(radius_circle);
    }
    radius_circle = L.circle([lat, lng], radius, {
      color: "rgb(0,0,0)",
      opacity: "1",
      weight: "2",
      lineCap: "butt",
      lineJoin: "round",
      fillColor: "rgb(86, 148, 202)",
      fillOpacity: "0.3",
      fillRule: "evenodd",
    }).addTo(map);
    radius_circle.enableEdit();
  }

  function drawBleed(lat, lng, radius) {
    if (bleed_circle) {
      map.removeLayer(bleed_circle);
    }
    bleed_circle = L.circle([lat, lng], radius * 1.2, {
      color: "rgb(29, 112, 184)",
      opacity: "1",
      weight: "2",
      lineCap: "butt",
      lineJoin: "round",
      dashArray: "6,7",
      fillColor: "rgb(29, 112, 184)",
      fillOpacity: "0.15",
      fillRule: "evenodd",
    }).addTo(map);
  }
  // ----------------------------------------------------

  document
    .getElementById("submit-postcode")
    .addEventListener("click", searchPostcode);
  document.getElementById("submit-radius").addEventListener("click", addRadius);
  document
    .getElementById("postcode")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchPostcode();
      }
    });
  document.getElementById("radius").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addRadius();
    }
  });
  // document.getElementById("postcode").addEventListener("input", function () {
  //   document.getElementById("postcode").style.border = "2px solid #0b0c0c";
  //   document.getElementById("error-postcode") = "none";
  // });
  // document.getElementById("radius").addEventListener("input", function () {
  //   document.getElementById("radius").style.border = "2px solid #0b0c0c";
  //   document.getElementById("error-radius") = "none";
  // });
});
