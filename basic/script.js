
// Ex 1


// Create a form with input fields for your firstname, lastname and age.  Extract the values from each input field and display them all in a separate div.

// If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red. 

let fName = document.getElementById("f_name");
let lName = document.getElementById("l_name");
let age = document.getElementById("age");
let firstName = document.getElementById("name");
let lastName = document.getElementById("last-name");
let ages = document.getElementById("ages");

let btn = document.getElementById("submit-btn");

btn.addEventListener("click", showName, false);

function showName() {
    firstName.innerHTML = "<h3>" + fName.value + "</h3>";
    lastName.innerHTML = "<h3>" + lName.value + "</h3>";
    ages.innerHTML = "<h3>" + age.value + "</h3>";
    if (fName.value.length < 6) {
        firstName.style.color = "red";
    } else {
        firstName.style.color = "green";
    }
}

// Ex 2


// Extend the previous form to have a select option, where your profession can be selected. If you are working in IT, the background of the div displaying the information from the form will turn purple, if you work in hospitality, your div will turn yellow, etc. 

// (Hint: extracting the selection value will work similarly to extracting the input values)

let fName1 = document.getElementById("f_name1");
let lName1 = document.getElementById("l_name1");
let age1 = document.getElementById("age1");
let firstName1 = document.getElementById("name1");
let lastName1 = document.getElementById("last-name1");
let ages1 = document.getElementById("ages1");
let profession = document.getElementById("profession1");
let btn1 = document.getElementById("submit-btn1");

btn1.addEventListener("click", showName1, false);

function showName1() {
    let select = document.querySelector('input[name = profession]:checked');
    firstName1.innerHTML = "<h3>" + fName1.value + "</h3>";
    lastName1.innerHTML = "<h3>" + lName1.value + "</h3>";
    ages1.innerHTML = "<h3>" + age1.value + "</h3>";
    profession.innerHTML = "<h3>" + select.value + "</h3>";
    if (fName1.value.length < 6) {
        firstName1.style.color = "red";
    } else {
        firstName1.style.color = "green";
    }
    if (select.value == "IT") {
        profession.style.backgroundColor = "purple";
    } else if (select.value == "Hospitality") {
        profession.style.backgroundColor = "yellow";
    } else if (select.value == "Industry") {
        profession.style.backgroundColor = "green";
    }
}

