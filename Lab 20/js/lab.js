/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: Nov 8, 2020
license: Public Domain

code referenced from Wes Modes (Csumb) lecture/Kariya Hunter.
*/

var URL = "https://xkcd.com/info.o.json";

var URLpre = "https://xkcd.com/";
var URLpost = "/info.o.json";

function showComic(num) {
	if (typeof num === "undefined") {
		numStr = "";
	} 
	else { 
	    numStr = num.toString () + "/";
	}

	var ourURL = URLpre + num + URLpost;

}

$.ajax({

	url: URL,

	type: "GET",
})

.done(function( data ) {
	var imageUrl = data.img;
	var title = data.title;
	var alt = data.alt;
	var comicNum = data.num;
	var html =  ` <div id="imageblock"> 
	              <h2> ${title} </h2> 
	              <img src ="${imageURL}" title="${alt}"> <br>
	              <button id="prev"> Prev </button> <button id="next"> Cont </button>
	              <div>
	                `
	$("#xkcd").append(html);

    $("prev").click(function(){
    	getComic(comicNum - 1);
    });

    $("next").click(function(){
    	getComic(comicNum + 1);
    });
})



getComic();
