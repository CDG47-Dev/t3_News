/*#####################################
Additional jQuery for NewsCarousel
#####################################*/
$(document).ready(function(){
    
	var clickEvent = false;
	$('div[id^="t3news-newscarousel-"]').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})
$(window).load(function() {
    $('div[id^="t3news-newscarousel-"]').each( function () {
        var boxheight = $(this).find('.carousel-inner').innerHeight();
        var itemlength = $(this).find('.item').length;
        var triggerheight = Math.round(boxheight/itemlength+1);
        $(this).find('.list-group-item').outerHeight(triggerheight);
	});
});

/*#####################################
Additional jQuery for NewsCarousel Vertical
#####################################*/
$(document).ready(function(){
    
	var clickEvent = false;
	$('div[id^="t3news-newscarouselv-"]').carousel({
		interval:   4000	
	}).on('click', '.list-groupv li', function() {
			clickEvent = true;
			$('.list-groupv li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-groupv').children().length -1;
			var current = $('.list-groupv li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-groupv li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})