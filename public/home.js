(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		initialize();
		ID("search").onclick = search;
		ID("profile").onclick = login;
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

		// Load Username
		var username = document.cookie;
		if(username != null) {
			ID("profile").innerhtml = username;
		}
	}

	//test firebase code edit this----------------------------------------------!!!!!!!!!!!!!!!!!!!
	function search() {
		var value = ID("searchbar").value;
		console.log("value = " + value);
		var database = firebase.database();
		firebase.database().ref('users/' + 1).set({
			name : value
		});
		console.log("finished writing value");
	}

	function login() {
		if(document.cookie != null) {
			href="profile.html";
		}
	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

})();