function populateProfileInfo() {
	document.getElementById("UserName").innerHTML = localStorage.getItem("fName") + " " +  localStorage.getItem("lName");

	if (localStorage.getItem("language") == "") {
		console.log("nope, no luck");
	}
	else {
		console.log("some luck");
		document.getElementById("Language").innerHTML = localStorage.getItem("language") + ": " + localStorage.getItem("studyTime") + " mins";
		var tasks = "";
		if (localStorage.getItem("reading"))
			tasks = localStorage.getItem("reading");
		if (localStorage.getItem("listening"))
			if (tasks)
				tasks = tasks + ", " + localStorage.getItem("listening");
			else
				tasks = tasks + localStorage.getItem("listening");
		if (localStorage.getItem("speaking"))
			if (tasks)
				tasks = tasks + ", " + localStorage.getItem("speaking");
			else
				tasks = tasks + localStorage.getItem("speaking");
		document.getElementById("tasks").innerHTML = tasks; 
	}
	
}