import React from "react";
import Header from "../Header";
import Card from "../Card";
import SideBar from "../Sidebar";







export default function AppHome() {
  const cells = [];
  const randJobs = ["Software Engineering Intern", "Backend Intern", "iOS Developer", "Andriod Developer", "Marketing Intern"]
  const randLogo = ["https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png", "https://i.pinimg.com/originals/ce/af/83/ceaf8384322af790486cff176a0a2f24.png", "https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png", "https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png", "https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"]
  for (let i = 0; i < 5; i++) {
    cells.push(
        <Card job={randJobs[i]} logo={randLogo[i]} student={true}/>
    );
  }
    return (
    <div classname="app">
    <Header logged="true" />
    {cells}
    </div>
    );

   
  }