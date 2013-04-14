/** External Links **/

function externalLinks() { 
	if (!document.getElementsByTagName) 
		return; 
	var anchors = document.getElementsByTagName("a"); 
	for (var i=0; i<anchors.length; i++) 
		{ 
			var anchor = anchors[i]; 
			if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") anchor.target = "_blank"; 
		} 
	} window.onload = externalLinks;

/** Responsive Menu **/

$(function() {
	$("<select />").appendTo(".menu");
	$("<option />", { "selected": "selected", "value" : "", "text" : "Go to..." }).appendTo(".menu select");
	$("#menucont a").each(function() { var el = $(this); $("<option />", { "value" : el.attr("href"), "text" : el.text() }).appendTo(".menu select"); });
	$("#menucont select").change(function() { window.location = $(this).find("option:selected").val(); });
});

/** Load Google Map in Contact Page **/
function loadgooglemap() {
	var myOptions = {
		center: new google.maps.LatLng(Latitude,Longitude),
		zoom: 16,
		disableDefaultUI: true,
		zoomControl: true,
		mapTypeControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(Latitude,Longitude),
		map: map,
		title:"Hello World!"
	});
	var infowindow = new google.maps.InfoWindow({
		content:'<div style="font-family: arial,sans-serif;width:290px;color:#000;"><b>XYZ Company</b><div style="font-size:12px;">Data you want to display on marker<br/><br/>Mo. : +0000000000</div></div>',
	});
	infowindow.open(map, marker);
}
