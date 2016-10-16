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
		  displayEvents()
	}

	function displayEvents() {
		var ref = firebase.database().ref("/events");
		ref.on("value", function(snapshot) {
   				var events = snapshot.val()
				console.log(events);
				for (let activity in snapshot.val()) {
					console.log("Event: " + activity);
					for (var detail in activity) {
						if (activity.hasOwnProperty(detail)) {
    						console.log(detail + " -> " + activity[detail]);
 						}
					}

				}

			}, function (error) {
				console.log("Error: " + error.code);
		});
	}
	

	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

