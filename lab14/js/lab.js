/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: october 20, 2020
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/

function Car (make, model,year,color,extras) {
this.make = make;
this.model = model;
this.year = year;
this.color = color;
this. extras = extras;

this.info = function() {
	return( "make:" + this.make + "<br>" +
		    "model:" + this.model +"<br>" +
		    "year:" + this.year + "<br>" +
		    "color:" + this.color + "<br>" +
		     "extras:" + this.extras);
  }
}

var acura = new Car("Acura", "Legend", "1996", "Black", "four door");
acura.info();

var honda = new Car ("Honda", "Civic", "2006", "Grey", "is not that old");
honda.info();

document.getElementById("output").innerHTML += "<p>" + acura.info() + "</p>";

document.getElementById("output").innerHTML += "<p>" + honda.info() + "</p>";








