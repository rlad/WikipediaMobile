window.chrome = function() {
	var menu_handlers = {
		'read-in': function() { languageLinks.showAvailableLanguages(); },
		'near-me': function() { getCurrentPosition(); },
		'view-history': function() { appHistory.showHistory(); } ,
		'save-page': function() { savedPages.saveCurrentPage() },
		'view-saved-pages': function() { savedPages.showSavedPages(); },
		'share-page': function() { sharePage(); },
		'go-forward': function() { goForward(); },
		'select-text': function() { selectText(); },
		'view-settings': function() { appSettings.showSettings(); },
		'view-about': function() { aboutPage(); }
	};

	function showSpinner() {
		$('.titlebar .spinner').css({display:'block'});
		$('#search').addClass('inProgress');
		$('#clearSearch').css({height:0});
	}

	function hideSpinner() {
		$('.titlebar .spinner').css({display:'none'});	
		$('#clearSearch').css({height:30});
	}

	function showNotification(text) {
		alert(text);
	}

	return {
		menu_handlers: menu_handlers,
		showSpinner: showSpinner,
		hideSpinner: hideSpinner,
		showNotification: showNotification
	};
}();
