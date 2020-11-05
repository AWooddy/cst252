/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: Nov 1, 2020
license: Public Domain

code referenced from Wes Modes (Csumb) lecture.
*/

$(".thing1").hover(function(){
	$(".metabox1").addClass("show");
})

$(".thing1").hover(
	function(){
    $(".metabox1").addClass("show");
  },
	function(){
  	$(".metabox1").removeClass("show");
  } )


