	"use strict";

	// instructions to load the page
	window.onload = function() {
		initialize();
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
		var values = [username, name, password, password_confirmation, phone, email]
		var fields = ID("createProfile").getElementsByTagName("h2");
		//fieldCheck(values, fields);
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
	
	//checks fields to make sure they're valid
	function fieldCheck(fields, headers) {
		for(var i = 0; i < fields.length; i++) {
			if(i == 0) {
				console.log(headers[i].textContent);
				if(/\s/.test(fields[i])) {
					errorGenerator(fields[i], "\tNo spaces in your username", headers[i]);
				}
				specialCharCheck(fields[i]);
			} else if(i == 3) {
				if(/[0-9]/.test(fields[i])) {
					errorGenerator(fields[i], "\tNo numbers in your name", headers[i - 1]);
				}
				if(!/\s{1}/.test(fields[i])) {
					errorGenerator(fields[i], "\tToo many spaces", headers[i - 1]);
				}
				specialCharCheck(fields[i]);
			} else if(i == 4) {
				if (!/^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/.test([fields[i]])) {
					errorGenerator(fields[i], "\tInvalid phone number", headers[i -1]);
				}
				specialCharCheck(fields[i]);
			} else if(i == 5) {	
				if(!/[@]{1}/g.test(fields[i])) {
					errorGenerator(fields[i], "\tInvalid email", headers[i - 1]);
				}
			}
		}
	}

	//generates error message
	function errorGenerator(field, errorText, header) {
		var error = document.createElement("p");
		var errorMsg = document.createTextNode(errorText);
		error.appendChild(errorMsg);
		header.appendChild(error);
	}

	//checks for special characters
	function specialCharCheck(field) {
		if(/[\\\^\$\.\|\?\*\+\(\)\[\{]/.test(field)){
			errorGenerator(field, "No special characters", headers);
		}
	}

	// returns an element of a given id
	function ID(id) {
		return document.getElementById(id);
	}

