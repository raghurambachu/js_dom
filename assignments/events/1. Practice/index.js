//Select the section with an id of container without using querySelector.
const containerSection = document.getElementById("#container");

//Select the section with an id of container using querySelector.
const containerSectionSel = document.querySelector("#container");

//Select all of the list items with a class of "second".
const lisWithSecond =  document.querySelectorAll(".second");



//Select a list item with a class of third, but only the list item inside of the ol tag.
const lisThird = document.querySelector("ol").querySelector(".third");


//Give the section with an id of container the text "Hello!".
let p = document.createElement("p");
p.textContent = "Hello!";
containerSectionSel.prepend(p);


//Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");


//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
let liElement = document.createElement("li");


//Give the li the text "four".
liElement.textContent = "four"



//Append the li to the ul element.
let ul = document.querySelector("ul");
ul.append(liElement);


//Loop over all of the list inside the ol tag and give them a background color of "green".
let ol = document.querySelector("ol");
let olLis = ol.querySelectorAll("li")
olLis.forEach(li => li.style.backgroundColor = "green");


//Remove the div with a class of footer.
footer.remove();