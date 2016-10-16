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
		var fields = ID("createProfile").getElementsByTagName("h2");
		console.log(fields);
		fieldCheck(fields);
		var database = firebase.database();
		if (username == "" || name == "" || password == "" || password_confirmation == "" ||
		 phone == "" || email == "") {
			alert("Please make sure all fields are filled out!");
		} else
		/*var exists;
		database.ref('/users').once('value').then(function(snapshot) {
			if (snapshot.hasChild(username)) {
				console.log("snapshot key = " + snapshot.key);
				alert("Data already exists!");
			}
		});
		if (false){ // if username already exists, prevent rewriting.

		}else */ if (password != password_confirmation) {
			alert("Your passwords do not match.");
		} else {
			database.ref('users/' + username).set({
				user_fullname : name,
				user_password : password,
				user_phone : phone,
				user_email : email
			});
			console.log("Added new user: " + username);
		}
		//alert(value);
		window.location = "index.html";
		

	}
	
	function fieldCheck(fields) {
		for(var i = 0; i < fields.length(); i++) {
			if(i == 0) {
				if(/\s/.test(fields[i])) {
					errorGenerator(fields[i], "No spaces in your username");
					console.log("test");
				}
				specialCharCheck(fields[i]);
			} else if(i == 1 || i == 2) {
				if(!/[a-zA-Z0-9]{1,}/.test(fields[i])) {
					errorGenerator(fields[i], "Password must be more than 1 character");
					console.log("test");
				}
				specialCharCheck(fields[i]);
			} else if(i == 3 {
				if(/[0-9]/.test(fields[i])) {
					errorGenerator(fields[i], "No numbers in your name");
					console.log("test");
				}
				if(!/\s{1}/.test(fields[i])) {
					errorGenerator(fields[i], "Too many spaces");
					console.log("test");
				}
				specialCharCheck(fields[i]);
			} else if(i == 4) {
				if (!/^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/.test([fields[i]])) {
					errorGenerator(fields[i], "Invalid phone number");
					console.log("test");
				}
				specialCharCheck(fields[i]);
			} else {
				if(/[@]{1}/.test(fields[i])) {
					errorGenerator(fields[i], "Invalid email");
					console.log("test");
				}
			}
		}
	}

	function errorGenerator(field, errorText) {
		var errorMsg = document.createTextNode(errorText);
		var error = document.createElement("p").appendChild(errorMsg);
		ID(field).appendChild(error);
	}

	function specialCharCheck(field) {
		if(/\W/.test(fields[i])) {
			errorGenerator(field, "No special characters");
		}
	}

	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

