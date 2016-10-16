	"use strict";

	// instructions to load the page
	window.onload = function() {
		initialize();
		ID("")
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

	function hostAnEvent() {
		var title = ID("test").value;
		var date = ID("date").value;
		var time = ID("time").value;
		var location = ID("location").value;
		var desc = ID("description").value;
		//alert(value);
		
		//var database = firebase.database();
		//var title = data.elements["title"];
		console.log("EventTitle:" + title);
		console.log("Event Date: " + date);
		console.log("Event time: " + time);
		console.log("Event Location:" + location);
		console.log("Event Description: " + desc);
		console.log("finished writing value");
	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

