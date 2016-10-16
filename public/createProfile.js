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

	function makeProfile() {
		var username = ID("username").value;
		var name = ID("name").value;
		var password = ID("newpassword").value;
		var password_confirmation =  ID("confirmpassword").value;
		var phone = ID("tel").value;
		var email = ID("email").value;
		var database = firebase.database();
		/*if (username == "" || name == "" || password == "" || password_confirmation == "" ||
		 phone == "" || email == "") {
			alert("Please make sure all fields are filled out!");
		} else*/ 
		var exists;
		database.ref('/users').once('value').then(function(snapshot) {
			if (snapshot.hasChild(username)) {
				alert("Data already exists!");
			}
		});
		if (false){ // if username already exists, prevent rewriting.

		} /*else if (password != password_confirmation) {
			alert("Your passwords do not match.");
		} */else {
			database.ref('users/' + username).set({
				user_fullname : name,
				user_password : password,
				user_phone : phone,
				user_email : email
			});
			console.log("Added new user: " + username);
		}
		//alert(value);
		

	}
	
	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

