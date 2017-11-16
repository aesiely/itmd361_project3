function initMap() {
  //Map options
  var options = {
    zoom: 5,
    center: {lat: 26.8206, lng: 30.8025},
    mapTypeControlOptions: {
    position: google.maps.ControlPosition.BOTTOM_CENTER
    }
   }
   
  //New map
    var map = new google.maps.Map(document.getElementById('map'), options);
    addMarker({
     coords: {lat:31.526038, lng:31.843669},
     iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
     content: '<h1>Hang out spot in my home town, Ras El Bar</h1>'
     });
    addMarker({
     coords: {lat:30.0444, lng:31.2357},    
     content: '<h1>The capital of Egypt, Cairo</h1>'
     });
    addMarker({
     coords: {lat:27.2579 , lng:33.8116 },
     iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
     content: '<h1>A beautiful get away for a vacation, Hurghada</h1>'
     });
       
  //Add Marker function
    function addMarker(props){
    var marker = new google.maps.Marker({
     position: props.coords,
     map: map,
     icon: props.iconImage             
     });
              
   //check for customIcon
    if(props.iconImage){
   //set icon image
     marker.setIcon(props.iconImage);
     } 
              
   //check content
    if (props.content) {
    var infoWindow = new google.maps.InfoWindow({
     content: props.content
    });
                
     marker.addListener('click', function(){
       infoWindow.open(map, marker);
    });
      }
     }
    }       