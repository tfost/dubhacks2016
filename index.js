(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		ID("search").onclick = search;
	};
	
	function search() {
		var value = ID("searchbar").value;
		alert(value);
		// your crap goes here
	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

})();