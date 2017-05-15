
$('.owl_carousel').owlCarousel({
	singleItem: true,
	navigation: true,
	navigationText: ['<img src="img/arrow_left.png" alt="">','<img src="img/arrow_right.png" alt="">']

});
  $(document).ready(function(){ 
        var my_link = location.pathname;
        $('#top_menu li a[href="'+my_link+'"]').parent().addClass('active');
    });

