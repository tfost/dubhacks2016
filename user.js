(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		ID("search").onclick = search;
	};
	
	function search() {
		alert("tada");
		// your crap goes here
	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}
	function doSomething() {
    	alert('Form submitted!');
   	 	return false;
   	}
})();