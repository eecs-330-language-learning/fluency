function createNewProfile() {
	var fName = document.getElementById("exampleFirstName").value;
	var lName = document.getElementById("exampleLastName").value;
	var emailID = document.getElementById("exampleInputEmail").value;
	var pwd = document.getElementById("exampleInputPassword").value;
	var repeatPwd = document.getElementById("exampleRepeatPassword").value;
	
	// name check
	if (fName == "" || lName == "") {
		document.getElementById("errormsg").innerHTML = "please enter your name";
		document.getElementById("errormsg").setAttribute("style", "color: red;");
	}
	
	// email check:
	else if (!validateEmail(emailID)) {
		document.getElementById("errormsg").innerHTML = "please enter a valid email";
		document.getElementById("errormsg").setAttribute("style", "color: red;");
	}
	
	else if (pwd == "" || repeatPwd == "") {
		document.getElementById("errormsg").innerHTML = "please enter a password";
		document.getElementById("errormsg").setAttribute("style", "color: red;");
	}
	
	else if (pwd != repeatPwd) {
		document.getElementById("errormsg").innerHTML = "passwords must match";
		document.getElementById("errormsg").setAttribute("style", "color: red;");
	}
	
	else {
		document.getElementById("errormsg").innerHTML = "";
		localStorage.setItem("fName", fName);
		localStorage.setItem("lName", lName);
		localStorage.setItem("emailID", emailID);
		localStorage.setItem("pwd", pwd);
		localStorage.setItem("language", "");
		localStorage.setItem("studyTime", "");
		localStorage.setItem("reading", "");
		localStorage.setItem("speaking", "");
		localStorage.setItem("listening", "");
		window.location.href="index.html";
	}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function login() {
	var emailID = document.getElementById("exampleInputEmail").value;
	var pwd = document.getElementById("exampleInputPassword").value;
	
	if (localStorage.getItem("emailID") == emailID) {
		if (localStorage.getItem("pwd") == pwd) {
			window.location.href="dashboard.html";
		}
		else {
			document.getElementById("errormsg").innerHTML = "invalid user name and password combination";
			document.getElementById("errormsg").setAttribute("style", "color: red;");
		}
	}
	else {
		document.getElementById("errormsg").innerHTML = "invalid user name";
		document.getElementById("errormsg").setAttribute("style", "color: red;");
	}
}