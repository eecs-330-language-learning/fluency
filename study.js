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