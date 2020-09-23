/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: 15th of September
license: Public Domain
*/


// referenced from Wes Modes(instructor at CSUMB)
function sortUserName () {
	var userName = window.prompt("Hi. Welcome to the forest, what is your name?");
	console.log("userName =", userName);
	//split string to array 
	var nameArray = userName.split('');
	console.log("nameArray =", nameArray);
	//sort the array
	var nameArraySort = nameArray.sort();
	console.log("nameArraySort =", nameArraySort);
	// join array back to string
	var nameSorted = nameArraySort.join('');
	console.log("nameSorted =" + nameSorted);

	return nameSorted;
}
	//output
	document.writeln("This is the dumb name the prince of fools has gifted you: ", 
		sortUserName(), "</br>");
	

