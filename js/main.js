$( document ).ready(function() {
    
     // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

   });
function checkSize(){
	if($('.hamburger-menu').css('display')=='none')
	{
		$('aside').css('visibility','visible');
		$('aside').css('width','250px');
		$('header').css('margin-left','250px');
		$('main').css('margin-left','250px');
	}
}

(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
		if($('aside').css('visibility')=='collapse')
		{
		$('aside').css('visibility','visible');
		$('aside').css('width','250px');
		$('header').css('margin-left','250px');
		$('main').css('margin-left','250px');	
		}
		else{
		$('aside').css('visibility','collapse');
		$('aside').css('width','0px');
		$('header').css('margin-left','0px');
		$('main').css('margin-left','0px');	
		}
	})
})();