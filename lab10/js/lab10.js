/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/


 
var button = document.getElementById("button");
var input = document.getElementById("input");

button.addEventListener("click", function() {
	inputValue = document.getElementById ("myinput").value;
	document.writeln("Your name is probably:", inputValue);
});