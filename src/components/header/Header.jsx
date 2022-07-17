import React from "react";
import {NavBar} from '..'
import './header.css'

const Header = () => {
    return(
        <div className="header">
            <div  className="logo">
                <h1>Jeevanath Gopalakrishnan</h1> 
                <span className="profession">This Personal Portfilio Site Under Development.</span>
            </div>
            <NavBar />
        </div>
    )
}

export default Header