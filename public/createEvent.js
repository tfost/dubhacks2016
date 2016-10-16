	"use strict";

	//var id = "tag1";
	//var tagNumber = parseInt(id.charAt(id.length-1));

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
		var cookie = getCookie("username");
		if (cookie == "" || cookie == undefined) {
			alert("You need to log in before creating an event!");
		} else {
			var title = ID("test").value;
			var date = ID("date").value;
			var time = ID("time").value;
			var location = ID("location").value;
			var desc = ID("description").value;
			var tagList = [];
			var tags = ID("tagList").getElementsByClassName("tag");

			for(var i = 0; i < tags.length; i++) {
				tagList.push(tags[i].value);
			}
			if (title == "" || date == "" || time == "" || location == "" || desc == "" || tagList.length < 1 || tagList == undefined) {
				alert("Please make sure all fields are filled out!");
			} else {			
				var database = firebase.database();
				database.ref('events/' + title).set({
					event_date : date,
					event_time : time,
					event_location : location,
					event_description : desc,
					event_tags : tagList,
					event_members : cookie// todo: make host a member by default.
				});
			}
		}
		window.location = "index.html";
	}

	function addTag() {
		var tag = document.createElement("input");
		//tagNumber++;
		//tag.id = "tag" + tagNumber.toString();
		tag.className = "tag";
		tag.placeholder = "e.g. Music, Sports, etc.";
		tag.size = "60";
		ID("tagList").appendChild(tag);
		ID("tagList").appendChild(document.createElement("br"));
	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

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

