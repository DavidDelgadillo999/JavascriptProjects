﻿var span = document.createElement("span");
span.innerHTML = "My Gram";

var div =
    document.getElementById("MyInstaContainer");

div.appendChild(span);

var loginButton =
    document.createElement("button");
loginButton.innerHTML = "Log In";

div.appendChild(loginButton);

var signUpButton =
    document.createElement("button");
signUpButton.innerHTML = "Sign Up";

div.appendChild(signUpButton);

var lineBreak =
    document.createElement("br");


div.appendChild(lineBreak);






var image1Span =
    document.createElement("span");
image1Span.innerHTML = "Image 1 ";

div.appendChild(image1Span);

var image2Span =
    document.createElement("span");
image2Span.innerHTML = "Image 2 ";

div.appendChild(image2Span);

var image3Span =
    document.createElement("span");
image3Span.innerHTML = "Image 3 ";

div.appendChild(image3Span);

var image4Span =
    document.createElement("span");
image4Span.innerHTML = "Image 4 ";

div.appendChild(image4Span);

var image5Span =
    document.createElement("span");
image5Span.innerHTML = "Image 5 ";

div.appendChild(image5Span);







var lineBreak2 =
    document.createElement("br");

div.appendChild(lineBreak2);






var aboutSpan =
    document.createElement("span");
aboutSpan.innerHTML = "About ";

div.appendChild(aboutSpan);

var blogSpan =
    document.createElement("span");
blogSpan.innerHTML = "Blog ";

div.appendChild(blogSpan);


var jobSpan =
    document.createElement("span");
jobSpan.innerHTML = "Job ";

div.appendChild(jobSpan);


var helpSpan =
    document.createElement("span");
helpSpan.innerHTML = "Help ";

div.appendChild(helpSpan);



var lineBreak3 =
    document.createElement("br");

div.appendChild(lineBreak3);




var englishSpan =
    document.createElement("span");
englishSpan.innerHTML = "English ";

div.appendChild(englishSpan);

var yearSpan =
    document.createElement("span");
yearSpan.innerHTML = "2021";

div.appendChild(yearSpan);


var gramSpan =
    document.createElement("span");
gramSpan.innerHTML = "My Gram";

div.appendChild(gramSpan);

var myNumber = 10;
var myString = "A string";
var myBoolean = false;

console.log(myNumber);
console.log(myString);
console.log(myBoolean);

function SumOfNumbers(x, y) {
    var result = x + y;
    console.log(result);
}

SumOfNumbers(20, 30);


var lineBreak3 =
    document.createElement("br");

div.appendChild(lineBreak3);


"use strict";


var date = new Date(2021,2,5);



var newDate = convertToStringFormat(date);

document.write(newDate); //02/24/2021


function convertToStringFormat(date) {
    var stringDate =
    (date.getMonth() + 1).toString()
        .padStart(2,  "0")
        +
        "/" +
    date.getDate().toString().padStart(2, "0") +
        "/" +
        date.getFullYear(stringDate);


    return stringDate;

}