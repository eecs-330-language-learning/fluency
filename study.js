


function getSelectValue ()
 {
 var language_name = document.getElementById("language-name").value;
 var study_length = document.getElementById("sessionLength").value;
localStorage.setItem("language", language_name);
localStorage.setItem("time",study_length);
}

getSelectValue ();