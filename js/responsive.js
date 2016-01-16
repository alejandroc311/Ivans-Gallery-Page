//this is to deal with the slicknav plugin, its an empty label
$(function(){
		$('#menu').slicknav({
      label: "",


    });
	});

$(document).ready(function(){
  $(".slicknav_menu").prepend('<h3 class= "ivanBrand">Ivan Perez</h3>');
});



//this is to deal with the lightbox
lightbox.option({
	"fitImagesInViewport": true,
	"maxWidth":800,
	"maxHeight":800

});
