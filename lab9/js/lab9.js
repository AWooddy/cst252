/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain
*/


 var outputEl = 
 document.getElementById("output");

// first
 var new1El = 
  document.createElement("p");

	 new1El.innerHTML = "Wow look at this cool new thing.";

// second element
 var new2El = 
 document.createElement("p");
   
     new2El.innerHTML = "second cool thing";

 //appends

  document.body.appendChild(new1El)

  document.body.appendChild(new2El)


//css
  document.getElementById ("p").style.fontSize = "large";
  document.getElementById ("content").style.backgroundColor = "pink";