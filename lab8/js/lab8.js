/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain
*/



/* JS code referenced from screenshot provide by Wes Modes (instructor @ CSUMB)*/

function firstThing(test) {
	console.log(test + ": This is the First Thing. <br>")
}

function secondThing(test) {
	console.log(test + ": This is the Second Thing. <br>")
}

function thirdThing(test) {
	console.log(test + ": This is the Third Thing. <br>")
}

firstThing("TEST 1");

secondThing("TEST 1");

thirdThing("TEST 1");

setTimeout(function() {
	firstThing("TEST 2");
}, 0);

setTimeout(function() {
	secondThing("TEST 2");
}, 0);

setTimeout(function() {
	thirdThing("TEST 2");
}, 0);

setTimeout(function() {
 firstThing("TEST 3");
	
}, 3000);

setTimeout(function() {
	secondThing("TEST 3");
}, 1000);

setTimeout( function() {
	thirdThing("TEST 3");
}, 2000);

