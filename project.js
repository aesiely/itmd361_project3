/*function initMap() {
  var ras = {lat: 31.526038, lng: 31.843669};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4
  center: ras,
});
  var marker = new google.maps.Marker({
  position: ras,
  animation: google.maps.Animation.drop,
  map: map,
  title: "Ras Elbar"
});*/
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 31.526038, lng: 31.843669},
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          zoom: 8
        });
      }
