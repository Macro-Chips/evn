import React from "react";
import "./Card.css";
import "./Header.css";

export default function Card(job){

    return (

    <div class="container">
        <div class="card">
    <div class="card__container">
      <div className="jobLogo">
            <img className="logo"src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" ></img>
            </div>
      <p class="card__body">
      Software Engineering Intern
        </p>  
    </div>
    </div>
   </div>
);


}