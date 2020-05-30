

$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function(location) {
//    $('#country').html(location.country_name);
//    $('#state').html(location.state);
//    $('#city').html(location.city);
//    $('#latitude').html(location.latitude);
//    $('#longitude').html(location.longitude);
//    $('#ip').html(location.IPv4);
	  console.log(location);
	   x={};	
	  x.locationDetails=location;
  }
});


$(document).ajaxComplete(function(event, request, settings) {
				//console.log(event);
				//console.log(request);
				//console.log(settings.url);				
				//console.log(milliseconds);
				//localStorage.setItem(milliseconds, JSON.stringify(settings));
				//ajaxPost(settings.url,milliseconds);
		
	
		console.log(platform);
		var browserName = platform.name;
		var browserUrl = window.location.href;
				var milliseconds = new Date().getTime();
				    //var x={};					
					x.service=settings.url;
					x.ts=milliseconds;
					x.browser=browserName;
					x.url=browserUrl;
					x.os=platform.os.family;
					x.pageview=window.location.pathname;
					console.log(x);
					//x.responsedata=request.responseJSON;
					ajaxpost(x);
					
					
				});
			
			function ajaxpost(x){
				if("http://localhost:8090/userdatav".localeCompare(x.service)){
					 $.ajax({
					      type: 'POST',
					      url: "http://localhost:8090/userdatav",
					      data: JSON.stringify(x),
					      contentType: "application/json",
					      dataType: "json",
					      success: function(resultData) { 
					    	  alert("Save Complete") 
					    	  }
					});
				}
			}