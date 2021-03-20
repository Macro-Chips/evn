import React from "react";
import Header from "../Header";
import Card from "../Card";


export default function RecHome() {
      const cells = [];
      const randJobs = ["Software Engineering Intern", "Backend Intern", "iOS Developer", "Andriod Developer", "Marketing Intern"]
      for (let i = 0; i < 5; i++) {
        cells.push(
            <Card job={randJobs[i]} logo="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" recruiter={true}/>
        );
      }
        return (
        <div classname="app">
        <Header logged="true" />
        {cells}
        </div>
        );
    {/* Header */}
    {/* App Body */}
  }