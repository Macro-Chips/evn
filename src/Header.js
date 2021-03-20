import React from 'react'
import "./Header.css";
import HeaderOption from './HeaderOption';
function Header() {
    return (
        <nav className="header">
            <div className="headerLeft">
                <img className="evn_logo"src="https://github.com/Macro-Chips/evn/blob/main/evn.png?raw=true"></img>
            </div>    
            
            <div className="headerRight">
            <img className="userProfile"src="https://www.billionsinstitute.com/wp-content/uploads/2014/10/Jennifer-Circle-Headshot-300X300.png"></img>
            </div>
        </nav>
    )
}

export default Header
