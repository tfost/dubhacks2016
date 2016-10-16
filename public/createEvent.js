	"use strict";

	var id = "tag1";
	var tagNumber = parseInt(id.charAt(id.length-1));

	// instructions to load the page
	window.onload = function() {
		initialize();
		ID("create").onclick = hostAnEvent;
		ID("add").onclick = addTag;
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
		if (title == "" || date == "" || time == "" || location == "" || desc == "") {
			alert("Please make sure all fields are filled out!");
		} else {
			var database = firebase.database();
			database.ref('events/' + title).set({
				event_date : date,
				event_time : time,
				event_location : location,
				event_description : desc
			})
		}

		console.log("EventTitle:" + title);
		console.log("Event Date: " + date);
		console.log("Event time: " + time);
		console.log("Event Location:" + location);
		console.log("Event Description: " + desc);
		console.log("finished writing value");

	}

	function addTag() {
		var tag = document.createElement("input");
		tagNumber++;
		tag.id = "tag" + tagNumber.toString();
		tag.placeholder = ID("tag1").placeholder;
		tag.size = "60";
		ID("tagList").appendChild(tag);
		ID("tagList").appendChild(document.createElement("br"));
	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

