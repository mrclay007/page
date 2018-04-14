$(document).on('click','#about', function(){
	$("#overlay").css('display','flex');
	return	false;
});

$(document).on('click','.myicon', function(){
	$("nav ul").slideToggle();
	$(this).toggleClass("change");
});

$(window).resize(function(){
	if($(window).width() > 600){
		$("nav ul").removeAttr('style');
	}
});