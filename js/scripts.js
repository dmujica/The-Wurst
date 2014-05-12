			
function initialize() {
	 // Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#828877" },
        { saturation: -85 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

    var mapOptions = {
        center: new google.maps.LatLng(47.64738, -117.390139),
        zoom: 16,
        draggable:false,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
    }; 
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var contentString = '<div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Wurst Haus <a href="tel:1-509-468-9778">509.468.9778</a></h4>' + 
      '<h5> 825 South Perry Street <br> Spokane Washington 99203</h5>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


     //Associate the styled map with the MapTypeId and set it to display.
	  map.mapTypes.set('map_style', styledMap);
	  map.setMapTypeId('map_style');

    var image = 'img/mapmarker.svg';

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(47.64550, -117.391200), 
        map: map,
        icon: image,
        title: 'Wurst Haus'
    });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  }); 
} 
google.maps.event.addDomListener(window, 'load', initialize);

