
/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/
for (i=1; i <=200; i++) {
	if (i%15 ==0) {
		console.log("FizzBuzz");
	}
	if (i%21 == 0 ) {
		console.log ("FizzBoom");
	}
	if (i%35 == 0) {
		console.log ("BuzzBoom");
	}
	if (i%105 == 0) {
		console.log ("FizzBuzzBoom");
	}

	 if (i%3 ==0) {
	console.log ("Fizz");
    } 
    else if (I%5 ==0) {
    	console.log ("Boom");
    } else {
    	console.log(i);
    }

	


document.getElementbyId("output").innerHTML = output;