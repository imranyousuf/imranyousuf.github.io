jQuery(function($){
	$( document ).ready(function() {
	
		//Fix youtube z-index issue
		$('iframe').each(function() {
			var url = $(this).attr("src");
			var char = "?";
			if(url.indexOf("?") != -1) { var char = "&"; }
			$(this).attr("src",url+char+"wmode=transparent");
		});

		//adminLoggedIn class
		if($('.NavigationSection').length!=0) { $('body').addClass('adminLoggedIn'); }

		//Add GID Class to <head>
		$('html').addClass('GID'+getUrlVars()['gid']);
	
	}); // END Document Ready
	
	/****************************************
	** Functions START                     **
	**                                     */
		//Get Query String Variable Values
		function getUrlVars() {
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		} /* END Get Query String Variable Values */
	/*                                     **
	** Functions END                       **
	****************************************/
});