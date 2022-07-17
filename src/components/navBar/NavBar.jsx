import React from "react";
import './navBar.css'


const NavBar = () => {
    return(
        <div className="nav-container">
            <div className="nav"><a href="#">Who Am I ? </a></div>
            <div className="nav"><a href="#">What I Know ? </a></div>
            <div className="nav"><a href="#">Why This Site ?</a></div>
            <div className="nav"><a href="#">What I Worked On ?</a></div>
            <div className="nav"><a href="#">Feedback/Suggestions</a></div>
        </div>
    )
}

export default NavBar
