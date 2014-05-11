// Your Awesome Scripts!
$(document).ready(function(){


		new Maplace({
		show_markers: true,
		locations: [{
			lat: 47.647611,
			lon:  -117.389935, 
			zoom: 16,
		}]
	}).Load(); 

	console.log('Page Loaded. Lets Do this!');


}); 