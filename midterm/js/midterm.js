/*
Author: Alex Wooddy <awooddy@csumb.edu>
created: Nov 1, 2020
license: Public Domain

Alot of help from user/somekindofsorcery/ on reddit from learningprogramming! */


$(".thing1").hover(
  function(){
    $(".metabox").css("visibility", "visible")
  },
    function(){
    $(".metabox").css("visibility", "hidden")
  }
)

$(".hoverable").hover(
  function(event){
    console.log(event)
    $("p#" + event.currentTarget.id).css("visibility", "visible")
  },
    function(event){
    $("p#" + event.currentTarget.id).css("visibility", "hidden")
  }
)