$(document).ready(function(){
  
	init();

});

function init()
{
	search_bar_init();
	event_mouseover_init();
	other_init();
}

function search_bar_init()
{

	var search_bar = $('.navbar-search .search-query');
	search_bar.css("background-color","white");
	search_bar.css("color","black");
	
	var search_bar_width = search_bar.width();
	search_bar.width(search_bar_width/2);
	
	search_bar.focus(function(){
		search_bar.animate({width:search_bar_width});
	});
	
	search_bar.blur(function(){
		search_bar.animate({width:search_bar_width/2});
	});
}

function event_mouseover_init()
{
	$("#milk_1").mouseover(function(){
		var img = '<div class="container popover_avatar">\
		<div class="row">\
			<div class="span1">\
			<img src="image/milk.jpg" />\
			<p><small>NAICHA</small><p>\
			</div>\
			<div class="span1">\
			<img src="image/milk.jpg" />\
			<p><small>NAICHA</small><p>\
			</div>\
			<div class="span1">\
			<img src="image/milk.jpg" />\
			<p><small>NAICHA</small><p>\
			</div>\
			</div>\
			</div>';
		$("#milk_1").popover({ title: 'Look! A bird!', content: img, html:true,placement:'right'});
		$('#milk_1').popover("show");
	});
		
	$(".thumbnails").mouseleave(function(){
		$('#milk_1').popover("hide");
	});
	
	// $(".popover").mouseout(function(){
	// $('#milk_1').popover("hide");
	// });
	
	
	// $(".popover").live("click", function() {
	   // alert("success");
	// });
	
	
	/*$(":not(#milk_1)").click(function(){
		$('#milk_1').popover("hide");
	});*/
		
}

function other_init()
{

}

