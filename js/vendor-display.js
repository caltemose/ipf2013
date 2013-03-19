var ipf = ipf || {};

Zepto(function($){
	ipf.vendors = {};
	ipf.vendors.buttons = $('ul.navbuttons li');
	ipf.vendors.sections = $('ul.vendor');
	ipf.hash = '';
	//vars, fix hash
	var i, li, a, backBtn,
		hash=document.location.hash.replace('#', '');
	
	//store the hash only if it's legit
	for(i=0; i<ipf.vendors.sections.length; i++) {
		
		if ($(ipf.vendors.sections[i]).attr('id') === hash) {
			ipf.hash = hash;
			//break;
		}
	}

	ipf.vendors.showIndex = function(){
		var i, item;
		for(i=0; i<ipf.vendors.sections.length; i++) {
			item = ipf.vendors.sections[i];
			$(item).addClass('hidden');
			//console.log($(item).attr('id'));
		}
		$('.navbuttons').removeClass('hidden');
		$('a.back').addClass('hidden');
	};
	
	ipf.vendors.showHash = function(hash){
		hash = hash.replace('#', '');
		var i, item;
		for(i=0; i<ipf.vendors.sections.length; i++) {
			item = ipf.vendors.sections[i];
			//console.log($(item).attr('id') + ', ' + hash);
			if ($(item).attr('id') === hash) $(item).removeClass('hidden');
			else $(item).addClass('hidden');
		}
		$('.navbuttons').addClass('hidden');
		$('a.back').removeClass('hidden');
	};
	
	for(i=0;i<ipf.vendors.buttons.length;i++) {
		li = ipf.vendors.buttons[i];
		a = $(li).find('a');
		$(a).click(function(e){
			e.preventDefault();
			ipf.vendors.showHash( $(this).attr('href') );
		});
	}
	
	$('a.back').click(function(e){
		e.preventDefault();
		ipf.vendors.showIndex();
	});
	
	if(ipf.hash === '') ipf.vendors.showIndex();
	else ipf.vendors.showHash(ipf.hash);

});
