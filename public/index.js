(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		ID("search").onclick = search;
	};
	
	function search() {
		var value = ID("searchbar").value;
		//alert(value);
		console.log("value = " + value);
		var database = firebase.database();
		firebase.database().ref('users/' + 1).set({
			name : value
		});
		console.log("finished writing value");
		// your crap goes here

	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

})();