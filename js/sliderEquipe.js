$(function(){
	var delay = 3000;
	var curIndex = 0;
	var amt;
	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.Rugal').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.Rugal').css('width', sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');

		for( var i = 0; i<amt; i++){
			if (i==0)
				$('.slider-bullets').append('<span style ="background-color:blue;"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}

	}
	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex =0;
			goToSlider(curIndex);
		},delay);
	}

	function goToSlider(curIndex){
		var offSetx = $('.Rugal').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color', 'red');
		$('.slider-bullets span').eq(curIndex).css('background-color', 'blue');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetx});

	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetx});
	})
})