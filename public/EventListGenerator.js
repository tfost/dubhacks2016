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
					var activityDiv = document.createElement("div")
					var title = document.createElement("h3");
					title.appendChild(document.createTextNode(activity));
					activityDiv.appendChild(title);
					activityDiv.appendChild(document.createElement("br"));

					console.log("Event: " + activity + " ");
					console.log("Time : " + events[activity]["event_time"]);
					activityDiv.appendChild(document.createTextNode("Time: " + events[activity]["event_time"]));
					activityDiv.appendChild(document.createElement("br"));
					activityDiv.appendChild(document.createTextNode("Date: " + events[activity]["event_date"]));
					activityDiv.appendChild(document.createElement("br"));
					activityDiv.appendChild(document.createTextNode("Time: " + events[activity]["event_location"]));
					activityDiv.appendChild(document.createElement("br"));
					activityDiv.appendChild(document.createTextNode("Time: " + events[activity]["event_description"]));
					activityDiv.appendChild(document.createElement("br"));

					var btn = document.createElement("BUTTON");
					btn.appendChild(document.createTextNode("Join Event!"));
					activityDiv.appendChild(btn);

					document.body.appendChild(activityDiv);

				}

			}, function (error) {
				console.log("Error: " + error.code);
		});
	}


	

	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

