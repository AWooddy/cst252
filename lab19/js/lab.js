/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: Nov 8, 2020
license: Public Domain

code referenced from Wes Modes (Csumb) lecture/Kariya Hunter.
*/

endpoint="http://quotes.stormconsultancy.co.uk/random.json"

$("#button").click(function(){
	$.ajax({
  
 	url: endpoint,

	 data: { id: 123},

 	type: "GET",

	 dataType : "json",
  })

	.done(function( data ) {

	 var quote = data.quote;
 	$("#output").append("<p>" + quote)
})

	.fail(function( xhr, status, errorThrown ) {
 	console.log(errorThrown + " Status:" + status );
});
})


