function getSelectValue ()
 {
 var language_name = document.getElementById("languagename").value;
 var study_length = document.getElementById("studyLength").value;
localStorage.setItem("language", language_name);
localStorage.setItem("time",study_length);
}

getSelectValue ();

function wordMeaning ()
{
    document.getElementById("newword").innerHTML= "goldfish";
}

function checkAnswer ()
{
	if (document.getElementById("opt1").checked) {
		document.getElementById("answer").innerHTML="correct";
		document.getElementById("answer").setAttribute("style", "background-color: green;");
		document.getElementById("answer").setAttribute("class", "correctButton");
		document.getElementById("reading_progress2").setAttribute("style", "width: 100%;");
		document.getElementById("reading_progress1").innerHTML="100%";
		
	}
	else {
		document.getElementById("question1").innerHTML="try again";
	}	
}

function selectWord(item)
{
	if (document.getElementById(item).style.backgroundColor ==  "rgb(78, 115, 223)")
		document.getElementById(item).setAttribute("style", "background-color: white; color: black;");
	else
		document.getElementById(item).setAttribute("style", "background-color: #4e73df; color: white;");
		
}


function checkAnswer2 ()
{
	var items = ["item2", "item3", "item4", "item5"];
		
	if (document.getElementById("item1").style.backgroundColor == "rgb(78, 115, 223)")
	{
		for (var item in items) {
			if (document.getElementById(items[item]).style.backgroundColor == "rgb(78, 115, 223)")
			{
				document.getElementById("listQuestion").innerHTML="try again";
				console.log("incorrect");
				return;
			}
		}
		document.getElementById("listQuestion").innerHTML="correct"
		document.getElementById("listQuestion").setAttribute("style", "background-color: green;");
		document.getElementById("listQuestion").setAttribute("class", "correctButton")
		document.getElementById("listening_progress2").setAttribute("style", "width: 100%;");
		document.getElementById("listening_progress1").innerHTML="100%";
		
	}
	else
		document.getElementById("listQuestion").innerHTML="try again"
}

		