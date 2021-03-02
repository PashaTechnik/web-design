
function displayLab1()
{
    document.getElementById("lab-list1").hidden = false;
    document.getElementById("lab-list2").hidden = true;
    document.getElementById("lab-list3").hidden = true;
    document.getElementById("lab-list4").hidden = true;
}

function displayLab2()
{
    document.getElementById("lab-list1").hidden = true;
    document.getElementById("lab-list2").hidden = false;
    document.getElementById("lab-list3").hidden = true;
    document.getElementById("lab-list4").hidden = true;
}

function displayLab3()
{
    document.getElementById("lab-list1").hidden = true;
    document.getElementById("lab-list2").hidden = true;
    document.getElementById("lab-list3").hidden = false;
    document.getElementById("lab-list4").hidden = true;
}

function displayLab4()
{
    document.getElementById("lab-list1").hidden = true;
    document.getElementById("lab-list2").hidden = true;
    document.getElementById("lab-list3").hidden = true;
    document.getElementById("lab-list4").hidden = false;
}


$(document).ready(function(){ 
    document.getElementById("lab-list2").hidden = true; 
    document.getElementById("lab-list3").hidden = true; 
    document.getElementById("lab-list4").hidden = true; 
}) 


function showGit(){
    document.getElementById("img").src="report screens/git.png"
    document.getElementById("link").href = "https://github.com/PashaTechnik/web-design"
}

function showRep(){
    document.getElementById("img").src="report screens/rep.png"
    $('#link').removeAttr('href')
}
