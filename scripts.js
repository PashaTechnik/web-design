
function displayLab1()
{
    document.getElementById("lab-list1").hidden = false;
    document.getElementById("lab-list2").hidden = true;
}

function displayLab2()
{
    document.getElementById("lab-list1").hidden = true;
    document.getElementById("lab-list2").hidden = false;
}

function displayLab3()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "3"
}

function displayLab4()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "4"
}

function displayLab5()
{
    document.getElementById("lab").innerHTML = "ПОСТАНОВКА ЗАДАЧІ Лабораторної роботи №"+ "5"
}

$(document).ready(function(){ document.getElementById("lab-list2").hidden = true; }) 