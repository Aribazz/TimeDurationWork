import React from "react";
import ReactDOM from "react-dom";


const myFirstName = "ARIYO";
const mySecondName = "AJAYI";
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);


ReactDOM.render(<div>
  <p>created by {myFirstName +"  "+ mySecondName}:</p>
  <p>copyright by {year}:</p>
</div>,
document.getElementById("root"));
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
