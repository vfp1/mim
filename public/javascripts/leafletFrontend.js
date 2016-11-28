


    var basemap0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
    });
    var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    var mymap = L.map('mapid', {
	    layers: [Esri_WorldImagery] // only add one!
    }).setView([64.127, -21.817], 13);

    var baseLayers = {
	"street map": basemap0,
	"satellite map": Esri_WorldImagery
};


L.control.layers(baseLayers).addTo(mymap);


    var mynd = L.icon({
          iconUrl: src="geotagged_photo_from_nexus.jpg",

          iconSize:     [50, 50], // size of the icon
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          });

    var data = [[64.127, -21.817, 'Thetta er mynd af einhverju'],
          [64.117, -21.807, 'Thetta er onnur mynd af einhverju'],
          ];


          var customOptions =
              {
              'maxWidth': '500',
              'minWidth': '300',
              'className' : 'custom',
               'navbar' : '0'
              }

    for (var i = 0; i < data.length; i++) {
          marker = new L.marker([data[i][0],data[i][1]])
          .bindPopup("<img id='image' src='thumbnail.png'/><br>" + data[i][2])
          .addTo(mymap);
          marker.on('mouseover', function (e) {
            this.show();
          });
          marker.on('mouseout', function (e) {
            this.closePopup();
          });
        //  marker.on('click', function (e) {
            //this.closePopup();
        //    var viewer = new Viewer(document.getElementById('image', customOptions));
        //    viewer.show();
        //  });

          }
      /*    var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
      imageBounds = [[64.127, -74.22655], [40.773941, -74.12544]];
[64.127, -21.817
          var overlay = new L.ImageOverlay("geotagged_photo_from_nexus.jpg", {
              opacity: 0.5
          });
          map.addLayer(basemap0);

          L.DomEvent.on(overlay._image, 'click', function(e) {
              console.log(e)
          })*/
        //  marker1.bindPopup( "<img src=" + icon_url + "/> Current temperature in " + location + " is: " + temp_f)

          //"img src=" + icon_url + "geotagged_photo_from_nexus.jpg"

//          marker1.bindPopup( "<img src=" + icon_url + "/> Current temperature in " + location + " is: " + temp_f)




          L.marker([64.121, -21.817], {icon: mynd}).addTo(mymap);
