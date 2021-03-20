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
            <img className="evn_logo"src="https://i.pinimg.com/originals/40/2f/09/402f09736ae33509f8b6f984bf1b917c.jpg"></img>
            </div>
        </nav>
    )
}

export default Header
