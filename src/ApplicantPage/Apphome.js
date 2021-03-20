import React from "react";
import Header from "../Header";
import Card from "../Card";







export default function AppHome() {
  const cells = [];
  const randJobs = ["Software Engineering Intern", "Backend Intern", "iOS Developer"]
  for (let i = 0; i < 3; i++) {
    cells.push(
        <Card />
    );
  }
    return (
    <div classname="app">
    <Header logged="true" />
    {/* <Card /> */}
    {cells}
    </div>
    );

   
  }