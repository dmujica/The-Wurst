			
// function initialize() {
// 	 // Create an array of styles.
//   var styles = [
//   {
//     "featureType": "transit",
//     "stylers": [
//       { "visibility": "off" }
//     ]
//   },{
//     "featureType": "road",
//     "stylers": [
//       { "visibility": "simplified" }
//     ]
//   },{
//     "featureType": "poi",
//     "stylers": [
//       { "visibility": "simplified" }
//     ]
//   },{
//     "featureType": "poi",
//     "stylers": [
//       { "visibility": "off" }
//     ]
//   },{
//     "featureType": "administrative",
//     "stylers": [
//       { "visibility": "off" }
//     ]
//   },{
//     "featureType": "water",
//     "stylers": [
//       { "visibility": "off" }
//     ]
//   },{
//   }
// ];

//   // Create a new StyledMapType object, passing it the array of styles,
//   // as well as the name to be displayed on the map type control.
//   var styledMap = new google.maps.StyledMapType(styles,
//     {name: "Styled Map"});

//     var mapOptions = {
//         center: new google.maps.LatLng(47.64738, -117.390139),
//         zoom: 16,
//         draggable:false,
//         disableDefaultUI: true,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         streetViewControl: false
//     }; 
//     var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

//   //   var contentString = '<div id="content">'+
//   //     '<h4 id="firstHeading" class="firstHeading">Wurst Haus <a href="tel:1-509-468-9778">509.468.9778</a></h4>' + 
//   //     '<h5> 825 South Perry Street <br> Spokane Washington 99203</h5>'+
//   //     '</div>';

//   // var infowindow = new google.maps.InfoWindow({
//   //     content: contentString
//   // });


//   //    //Associate the styled map with the MapTypeId and set it to display.
// 	   map.mapTypes.set('map_style', styledMap);
// 	  map.setMapTypeId('map_style');

//   //   var image = 'img/mapmarker.svg';

//   //   var markerVars = {
//   //       position: new google.maps.LatLng(47.64550, -117.391200), 
//   //       map: map,
//   //       icon: image,
//   //       title: 'Wurst Haus'
//   //   };

//   //   var marker = new google.maps.Marker(markerVars);

//   //   google.maps.event.addListener(marker, 'click', function() {
//   //   infowindow.open(map,marker);
//   // }); 
// } 
// google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
$('a[href*=#]').each(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname
&& this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
$('html, body').animate({scrollTop: targetOffset}, 2500);
return false;
});
}
}
});

});

