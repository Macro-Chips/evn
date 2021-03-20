import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
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

    );
}

export default Sidebar
