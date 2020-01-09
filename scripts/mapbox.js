function test(){
mapboxgl.accessToken = 'pk.eyJ1IjoiamF5ZnJheSIsImEiOiJjazU1dWFrNDMwMGZoM25ucHVpY2s5Y2wyIn0.zsXXbe0__hU6O3Ek_GZMBw';
var elmnt = document.getElementById("mapContainer");
// This adds the map to your page	
if ("geolocation" in navigator) { 
    navigator.geolocation.getCurrentPosition(position => {
document.getElementById("noLocation").remove();	
  elmnt.scrollIntoView();
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [position.coords.longitude, position.coords.latitude],
         zoom: 10,
		 interactive: false
        });
		
			var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: true//, // Use the geocoder's default marker style
  //bbox: [-77.210763, 38.803367, -76.853675, 39.052643] // Set the bounding box coordinates
});
map.addControl(geocoder, 'top-left');
});
    }; 
}