import React from 'react'
import "./Header.css";
import HeaderOption from './HeaderOption';
function Header(logged) {
    return (
        <nav className="header">
            <div className="headerLeft">
                <img className="evn_logo"src="https://github.com/Macro-Chips/evn/blob/main/evn.png?raw=true"></img>
            </div>    
            
            <div className="headerRight">
            <img className="userProfile"src="https://i.pinimg.com/originals/66/48/a8/6648a8201db92ac2a8e64f4920694070.jpg"></img>
            </div>
        </nav>
    )
}

export default Header
