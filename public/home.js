(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		initialize();
		updateUsername();
		ID("search").onclick = search;
		ID("viewProfile").onclick = viewprofile;
		ID("createAccount").onclick = createAccount;
		ID("getStarted").onclick = createAccount;
		ID("login").onclick = login;
		displayEvents();
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

	function updateUsername() {
		var username = document.cookie.value;
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

	/*=============================================================================================*/

	function viewprofile() {
		if(document.cookie.value != null) {
			//view profile
			window.location = "viewProfile.html";
		} else { //force login
			unhide("loginform");
			hide("content");
		}
	}

	function createAccount() {
		window.location = "profile.html";
	}

	function login() {
		var ref = firebase.database().ref("/users");
		ref.on("value", function(snapshot) {
   				var users = snapshot.val()
				console.log(users);
				for (let activity in snapshot.val()) {
					console.log("User: " + activity);
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
					console.log("Event: " + activity + " ");
					console.log("Time : " + events[activity]["event_time"]);
					activityDiv.appendChild(document.createTextNode("Time: " + events[activity]["event_time"]));
					activityDiv.appendChild(document.createElement("br"));
					activityDiv.appendChild(document.createTextNode("Date: " + events[activity]["event_date"]));
					activityDiv.appendChild(document.createElement("br"));
					activityDiv.appendChild(document.createTextNode("Location: " + events[activity]["event_location"]));
					activityDiv.appendChild(document.createElement("br"));
					activityDiv.appendChild(document.createTextNode("About: " + events[activity]["event_description"]));
					activityDiv.appendChild(document.createElement("br"));

					var btn = document.createElement("BUTTON");
					btn.onclick=function() {
						console.log("Joining " + activity);
						alert("You've joined the event " + activity);
					}
					btn.appendChild(document.createTextNode("Join Event!"));
					activityDiv.appendChild(btn);

					document.body.appendChild(activityDiv);

				}

			}, function (error) {
				console.log("Error: " + error.code);
		});
	}
// utilities=======================================================================================
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

	// hides a data element
	function hide(id) {
		ID(id).style.display = "none";
	}

	// unhides an element
	function unhide(id) {
		ID(id).style.display = "block";
	}

})();