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
    <div className="sidebar">
            <div className="sidebarTop">
            <img className="evn_logo"src="https://www.billionsinstitute.com/wp-content/uploads/2014/10/Jennifer-Circle-Headshot-300X300.png"></img>
                <h2>Jane Doe</h2>
                <h7> &nbsp;</h7>
                <h4>Recruiter for Spotify</h4>
            </div>
            
            <div className="sidebarStats">
                <div className="sidebarStat">
                    <p>Candidate Matches</p>
                    <p className="sidebarStatNum">20</p>
                </div>
                <div className="sidebarStat">Your Job Listings</div>
                <p className="sidebarStatNum">14</p>
            </div>
        </div>
    {cells}
    </div>
    );

   
  }