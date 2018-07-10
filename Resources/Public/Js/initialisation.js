/*#####################################
Additional jQuery for NewsCarousel
#####################################*/
$(function() {
    
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
$(window).on('load', function() {
    $('div[id^="t3news-newscarousel-"]').each( function () {
        var boxheight = $(this).find('.carousel-inner').innerHeight();
        var itemlength = $(this).find('.item').length;
        var triggerheight = Math.round(boxheight/itemlength+1);
        $(this).find('.list-group-item').outerHeight(triggerheight);
	});
});

/*#####################################
Additional jQuery for NewsCarousel Ticker
#####################################*/
$(function() {
    
	var clickEvent = false;
	$('div[id^="t3news-newscarouselticker-"]').carousel({
		interval:   4000	
	}).on('click', '.list-groupt li', function() {
			clickEvent = true;
			$('.list-groupt li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var current = $('.list-groupt li.active');
			current.removeClass('active');
			$('.list-groupt li').first().addClass('active');	
		}
		clickEvent = false;
	});
	$(function() {
	     var boxheight = $(this).find('.carousel-inner.ticker').innerHeight();
	  $('.ticker-news').vTicker('init', {speed: 1000, 
			pause: 4000,
			showItems: 4,
			height:boxheight}
		);
	});	
})
$(window).on('load', function() {
    $('div[id^="t3news-newscarouselticker-"]').each( function () {
        var boxheight = $(this).find('.carousel-inner.ticker').innerHeight();
        var itemlength = 3;
        var triggerheight = Math.round(boxheight/itemlength+1);	
        $(this).find('.list-groupt-item').outerHeight(triggerheight);
	});	
});

/*#####################################
Additional jQuery for NewsCarousel Vertical
#####################################*/
$(function() {
    
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