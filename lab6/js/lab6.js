/* 
*author: Alex Wooddy <awooddy@csumb.edu>
*created: september 19th 
*license: Public Domain
*/

//Define Variables
myTransport = ["Acura Legend","bus","rides from friends", "bike"];

myMainRide = {
	make: "Acura",
	model: "Legend",
	color: "Rusty",
	year: 1995,
	age: function() 
	{ return 2020 - age; 

	}
}

//output
document.writeln("Kinds of Transportion I use:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
	    JSON.stringify(myMainRide, null, '\t'),"</pre>");
