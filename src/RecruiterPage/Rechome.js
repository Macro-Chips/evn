import React from "react";
import Header from "../Header";
import Card from "../Card";


export default function RecHome() {
      const cells = [];
      const randJobs = ["Software Engineering Intern", "Backend Intern", "iOS Developer", "Android Developer", "Marketing Intern"]
      for (let i = 0; i < 5; i++) {
        cells.push(
            <Card job={randJobs[i]} logo="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" recruiter={true} window="/recruiter/jobs/candidates"/>
        );
      }
        return (
        <div classname="app">
        <Header logged="true" />
        <div className="sidebar">
            <div className="sidebarTop">
            <img className="evn_logo"src="https://cdn0.handsonconnect.org/0105/images/Tavares%20CIRCLE.jpg"></img>
                <h2>John Doe</h2>
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
    {/* Header */}
    {/* App Body */}
  }