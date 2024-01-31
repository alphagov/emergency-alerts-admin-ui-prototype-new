var map = L.map('map', {zoomSnap: 0}).setView([54.444173, -3.4890336], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var geojsonFeature = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

var jsonLayer = new L.geoJSON().addTo(map);

$.ajax({
  dataType: "json",
  url: geojsonFeature,
  success: function(data) {
      $(data.features).each(function(key, data) {
          jsonLayer.addData(data);
          jsonLayer.setStyle({
            "color": "#ffffff00"
          })
      });
  }
});

L.control.scale().addTo(map);

var markerIcon = L.icon({
  iconUrl: '/public/images/marker-icon.png',

  iconSize:     [40, 40]
})

var postcodeGeoJson = {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-3.509854227304459,54.41616361460847],[-3.5073195397853856,54.41398941804737],[-3.5041518509387974,54.41079580901893],[-3.4991307556629185,54.41462545661116],[-3.497453033924103,54.41810047221654],[-3.493197709321976,54.42275261444079],[-3.489197194576264,54.42529460525657],[-3.4888753294944768,54.43116757708163],[-3.490708619356156,54.432780780629514],[-3.491526693105698,54.43613023735198],[-3.4886822104454045,54.43857156445685],[-3.485515862703324,54.44160391129385],[-3.481280654668808,54.44395912867069],[-3.483870327472687,54.446249486655326],[-3.4873880445957184,54.44653333551593],[-3.488094806671143,54.44502205162527],[-3.4913000464439397,54.44523182552981],[-3.4937059879302983,54.44564201229024],[-3.494525402784348,54.44766325282109],[-3.4977024793624882,54.44889138844207],[-3.4998723864555363,54.44770146204004],[-3.500069528818131,54.445457194809784],[-3.499366790056229,54.443130138795624],[-3.499366790056229,54.440711700863275],[-3.500855416059494,54.43850838817718],[-3.504625260829926,54.435797956024224],[-3.507035225629807,54.433966460338375],[-3.50783184170723,54.432059215327364],[-3.50783184170723,54.42930700959378],[-3.5081242024898533,54.426706754249636],[-3.5076883435249333,54.424168752164306],[-3.508212715387345,54.420915073549494],[-3.509854227304459,54.41616361460847]]]}}

var polygonsWithCenters = L.layerGroup();
var postcodeLayer = new L.geoJson(postcodeGeoJson, {
  onEachFeature: function (feature, layer) {
    if (feature.geometry.type === "Polygon") {
      var center = layer.getBounds().getCenter();
      var marker = L.marker(center, {icon: markerIcon});
      var polygonAndItsCenter = L.layerGroup([layer, marker]);
      polygonAndItsCenter.addTo(polygonsWithCenters);
    }
  },
});

polygonsWithCenters.addTo(map);

postcodeLayer.setStyle({
  "color": "rgb(11, 11, 12)",
  "opacity": "1",
  "weight": "2",
  "lineCap": "round",
  "lineJoin": "round",
  "fillColor": "rgb(86, 148, 202)",
  "fillOpacity": "0.3",
  "fillRule": "evenodd"
});

var options = {
  position: 'topright',
  draw: {
    polygon: false,
    polyline: false,
    circle: {
      metric: 'metric'
    }, // Turns off this drawing tool 
  },
  edit: {
    featureGroup: editableLayers, //REQUIRED!! 
    remove: true
  }
};

var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

editFeatureGroup = L.featureGroup();
editToolbar = new L.EditToolbar({
  featureGroup: editFeatureGroup
})

editHandler = editToolbar.getModeHandlers()[0].handler
editHandler._map = map

var base;
var bleed;

map.on(L.Draw.Event.CREATED, function(e) {
  if (base) {
    editableLayers.removeLayer(base);
    if (bleed) {
      map.removeLayer(bleed);
    }
  }

  var type = e.layerType,
    layer = e.layer;

  editableLayers.addLayer(layer);

  base = layer;

  if (type === 'circle') {
    let radius = layer.getRadius();
    const bleedRadius = radius + 1000;

    bleed = new L.Circle(layer.getLatLng(), bleedRadius)
    console.log(layer.getLatLng());
    map.addLayer(bleed);

    bleed.setStyle({
      "color": "rgb(29, 112, 184)",
      "opacity": "1",
      "weight": "2",
      "lineCap": "butt",
      "lineJoin": "round",
      "dashArray": "6,7",
      "fillColor": "rgb(86, 148, 202)",
      "fillOpacity": "0.15",
      "fillRule": "evenodd"
    })

    editFeatureGroup.addLayer(layer)
    editHandler.enable()

    const radiusAreaElem = document.getElementById("area-radius");
    const radiusDp = radius > 1000 ? 1 : 2
    radiusAreaElem.textContent = ("Radius area of " + (Math.round(base.getRadius()) / 1000).toFixed(radiusDp) + "km");
  }

  base.setStyle({
    "color": "rgb(11, 11, 12)",
    "opacity": "1",
    "weight": "2",
    "lineCap": "round",
    "lineJoin": "round",
    "fillColor": "rgb(86, 148, 202)",
    "fillOpacity": "0.3",
    "fillRule": "evenodd"
  })
});

map.on(L.Draw.Event.EDITMOVE, function(e) {
  layer = e.layer;

  if (layer instanceof L.Circle) {
    base = layer;

    bleed.setLatLng(layer.getLatLng());

    const radiusAreaElem = document.getElementById("area-radius");
    const radiusDp = radius > 1000 ? 1 : 2
    radiusAreaElem.textContent = ("Radius area of " + (Math.round(base.getRadius()) / 1000).toFixed(radiusDp) + "km");
  }
});

map.on(L.Draw.Event.EDITRESIZE, function(e) {
  layer = e.layer;

  if (layer instanceof L.Circle) {
    base = layer;
    let radius = layer.getRadius();
    const bleedRadius = radius + 1000;

    bleed.setRadius(bleedRadius);

    const radiusAreaElem = document.getElementById("area-radius");
    const radiusDp = radius > 1000 ? 1 : 2
    radiusAreaElem.textContent = ("Radius area of " + (Math.round(base.getRadius()) / 1000).toFixed(radiusDp) + "km");
  }

  const bounds = editableLayers.getBounds();
  map.fitBounds(bounds.pad(0.6));
});

map.on("mousemove", function(e) {
  var type = e.layerType,
    layer = e.layer;

  if (type === 'circle') {
    base = layer;
    let radius = layer.getRadius();
    const bleedRadius = radius + 2000;

    bleed.setRadius(bleedRadius)
  }
});

map.on("draw:drawstop", function (e) {
  map.off("mousemove");
})
