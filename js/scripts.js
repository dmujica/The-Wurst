			
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(47.647611, -117.389935),
        zoom: 18,
        minZoom: 6,
        maxZoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
    }; 
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(47.647611, -117.389935), 
        map: map
    }); 
} 
google.maps.event.addDomListener(window, 'load', initialize);