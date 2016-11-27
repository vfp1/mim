var mymap = L.map('mapid').setView([64.127, -21.817], 13);
var basemap0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18
});
var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
basemap0.addTo(mymap);
Esri_WorldImagery.addTo(mymap);
const position = [64.127, -21.817];


var data = [[64.127, -21.817, 'Thetta er mynd af einhverju'],
            [64.117, -21.807, 'Thetta er onnur mynd af einhverju'],
           ];

for (var i = 0; i < data.length; i++) {
  marker = new L.marker([data[i][0],data[i][1]])
  .bindPopup(data[i][2])
  .addTo(mymap);
}

var mynd = L.icon({
  iconUrl: src="geotagged_photo_from_nexus.jpg",

  iconSize:     [50, 50], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([64.121, -21.817], {icon: mynd}).addTo(mymap);