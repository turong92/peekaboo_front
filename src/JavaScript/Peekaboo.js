import React, { Component } from "react";
import Menu from "../JavaScript/left/Menu";
import Home from "./center/home/Home";
import Profile from "./center/profile/profileCenter";

import "../CSS/left/leftSpace.css";

class Peekaboo extends Component {
    constructor(props) {
        super(props);
    }

    getCenter = () => {
        switch (this.props.location.pathname) {
            case "/home":
                return <Home/>;
            case "/profile":
                return <Profile/>;
            default: return "err";
        }
    }
    
    render(){
        console.log(this.props);
        return(
            <div>
                <div className="leftSpace"><Menu/></div>
                {this.getCenter()}
                
            </div>
        )
    }
}

export default Peekaboo;