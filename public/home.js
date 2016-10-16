(function() {
	"use strict";

	// instructions to load the page
	window.onload = function() {
		initialize();
		updateUsername();
		ID("search").onclick = search;
		ID("viewProfile").onclick = viewprofile;
		ID("createEvent").onclick = makeEvent;
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
		var username = getCookie("username");
		if(username == null || username == "") {
			username = "Profile";
		}
		console.log(username + "dun dun dun");
		ID("profile").innerHTML = username;
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
		var cookie = getCookie("username");
		if(cookie == null || cookie =="") {
			//force login
			unhide("loginform");
			hide("content");
		} else {
			window.location = "viewProfile.html";
		}
	}

	function createAccount() {
		window.location = "profile.html";
	}

	function makeEvent() {
		window.location = "event.html";
	}

	function login() {
		var enteredUsername = ID("username").value;
		var enteredPassword = ID("password").value;
		if(isValid(enteredUsername, enteredPassword)) {
			console.log("FRICKING UPDATING");
			setCookie("username", enteredUsername);
			updateUsername();
		} else {
			setCookie("username", "");
			console.log("INVALID");
		}
		
	}

	function isValid(username, password) {
		console.log("FREICKING CALLED");
		var ref = firebase.database().ref("/users");
		return ref.once("value").then(function(snapshot) {
   				var users = snapshot.val()
				console.log(users);
				for (var user in users) {
					console.log("User: " + user["username"]);
					if(user === username && users[user]["user_password"] === password) {
						return true;
					}
				}
				return false;

			});
	}

	function displayEvents() {
		var ref = firebase.database().ref("/events");
		ref.on("value", function(snapshot) {
   				var events = snapshot.val()
				console.log(events);
				for (let activity in snapshot.val()) {
					var activityDiv = document.createElement("container");
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
	//sets a cookie
	function setCookie(cname, cvalue) {
	    document.cookie = cname + "=" + cvalue;
	}

	//gets a cookie
	function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

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