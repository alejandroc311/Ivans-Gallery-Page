//this is for dealing with the mobile menu responsiveness
  $("#nav").addClass("js").before('<div id="menu">☰</div>');


// this is for dealing with the toggle/untoggle of the menu

$("#menu").click(function(){
	$("#nav").toggle();
});


// this is for dealing with a bug

$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});
