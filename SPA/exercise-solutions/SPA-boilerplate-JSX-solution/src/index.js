import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// WHAT: This variable returns contains the html to render
let name = "James";
let age = 12;
let output = (
	<span>
		{name} is {age} years old
	</span>
);

// WHERE: A DOM element that will contain the entire react generated html
const myDiv = document.querySelector("#myDiv");

//what   //where
ReactDOM.render(output, myDiv);