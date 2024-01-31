var base = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
			maxZoom: 19,
			subdomains: 'abcd',
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		});

		var map = L.map('map', {
			layers: [base],
			tap: false, // ref https://github.com/Leaflet/Leaflet/issues/7255
			center: new L.LatLng(48.5, -4.5),
			zoom: 5,
			fullscreenControl: true,
			fullscreenControlOptions: { // optional
				title:"Show me the fullscreen !",
				titleCancel:"Exit fullscreen mode"
			}
		});

		// detect fullscreen toggling
		map.on('enterFullscreen', function(){
			if(window.console) window.console.log('enterFullscreen');
		});
		map.on('exitFullscreen', function(){
			if(window.console) window.console.log('exitFullscreen');
		});

		// toggler into fullscreen mode
		const toggleFullscreen = function(){
			map.toggleFullscreen();
		}
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

var options = {
  position: 'topright',
  draw: {
    polyline: true,
    polygon: {
      allowIntersection: false, // Restricts shapes to simple polygons 
      drawError: {
        color: '#e1e100', // Color the shape will turn when intersects 
        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect 
      }
    },
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

  if (type === 'marker') {
    layer.bindPopup('A popup!');
  }

  editableLayers.addLayer(layer);

  if (type === 'circle') {
    base = layer;
    let radius = layer.getRadius();
    const bleedRadius = radius + 1000;

    bleed = new L.Circle(layer.getLatLng(), bleedRadius)
    map.addLayer(bleed);

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
  }

  const radiusAreaElem = document.getElementById("area-radius");
  radiusAreaElem.textContent = ("Radius area of " + (Math.round(base.getRadius()) / 1000).toFixed(2) + "km");
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
