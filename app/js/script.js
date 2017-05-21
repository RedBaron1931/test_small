$(function(){	

	$(".sale_box .wrapper .tab").click(function() {
		$(".sale_box .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 		$(".sale_box .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$('.owl_carousel').owlCarousel({
 	singleItem: true,
  	navigation: true,
 	navigationText: ['<img src="img/left.png" alt="">','<img src="img/right.png" alt="">']
	});
});