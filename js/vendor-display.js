var ipf = ipf || {};

Zepto(function($){
	ipf.vendors = {};
	ipf.vendors.buttons = $('ul.navbuttons');
	ipf.vendors.sections = $('ul.vendor');
	ipf.hash = '';
	//fix hash
	var i, hash=document.location.hash.replace('#', '');
	for(i=0; i<ipf.vendors.sections.length; i++) {
		if ($(ipf.vendors.sections[i]).attr('id') === hash) {
			ipf.hash = hash;
			break;
		}
	}
	console.log('ipf.hash: ' + ipf.hash);
	ipf.vendors.showIndex = function(){
		var i, item;
		for(i=0; i<ipf.vendors.sections.length; i++) {
			item = ipf.vendors.sections[i];
			$(item).addClass('hidden');
			//console.log($(item).attr('id'));
		}
		$('.navbuttons').removeClass('hidden');
	};
	
	ipf.vendors.showHash = function(hash){
		var i, item;
		for(i=0; i<ipf.vendors.sections.length; i++) {
			item = ipf.vendors.sections[i];
			console.log($(item).attr('id') + ', ' + hash);
			if ($(item).attr('id') === hash) $(item).removeClass('hidden');
			else $(item).addClass('hidden');
		}
		$('.navbuttons').addClass('hidden');
	};
	
	//@TODO handle .navbutton clicks
	for(i=0;i<ipf.vendors.buttons.length;i++) {
		
	}
	//@TODO add Return-to-Vendors link in each section + handle clicks
	
	if(ipf.hash === '') ipf.vendors.showIndex();
	else ipf.vendors.showHash(ipf.hash);

});
