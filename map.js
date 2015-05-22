'use strict';

d3.csv('http://artis.riker.grep.ro/data.csv', function(data) {
  var map = new google.maps.Map(
    document.getElementById('map-container'),
    {zoom: 6, center: {lng: 24.5, lat: 46}}
  );
  data.forEach(function(row) {
    if(row.lng && row.lat) {
      var marker = new google.maps.Marker({
        position: {lng: +row.lng, lat: +row.lat}
      });
      marker.setMap(map);
    }
  });
});
