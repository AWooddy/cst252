/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/


 
 var button = document.getElementbyId("nameButton");
 var heading = document.getElementbyId("heading");

 function buttonPress () {

 	var inputText = document.getElementbyId("input").value;

 	heading.innerText = "Hello," + inputText; 

 	input.value = "";

 	input.focus();
 }

 button.addEventListener("mouseover", buttonPress);
 function alertClick() { alert ("I hope this told you something:", input.value);

