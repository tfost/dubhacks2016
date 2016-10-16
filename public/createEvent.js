(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		initialize();
	};
	
	function initialize() {
		// Initialize Firebase
		  var config = {
		    apiKey: "AIzaSyBYY-2NRwIHT8KLGUz0NResAmBQH0o_J8U",
		    authDomain: "hackathon2016-16636.firebaseapp.com",
		    databaseURL: "https://hackathon2016-16636.firebaseio.com",
		    storageBucket: "hackathon2016-16636.appspot.com",
		    messagingSenderId: "521305151"
		  };
		  firebase.initializeApp(config);
	}

	function createEvent() {
		var data = ID("createEvent").data;
		//alert(value);
		var database = firebase.database();
		var title = data.elements["title"];
		console.log("title = " + title);

		console.log("finished writing value");

	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

})();