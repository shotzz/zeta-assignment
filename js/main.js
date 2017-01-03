$( document ).ready(function() {
    
     // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

   });
function checkSize(){
	if($('.hamburger-menu').css('display')=='none')
	{
		$('aside').css('display','block');
	    
	}
	else
	{
		$('aside').css('display','none');
	}	
}

(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
		$('aside').toggle();
		$('main').toggleClass('sidebar-active'); 
 	    $('header').toggleClass('sidebar-active');
 	    $('aside').toggleClass('animated slideInLeft');
        
	})
})();