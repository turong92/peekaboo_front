import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Menu from "../JavaScript/left/Menu";
import HomeCenter from "./center/home/HomeCenter";
import Profile from "./center/profile/profileCenter";

class Peekaboo extends Component {
    constructor(props) {
        super(props);
    }

    getCenter = () => {
        switch (this.props.location.pathname) {
            case "/home":
                return <HomeCenter/>;
            case "/profile":
                return <Profile/>;
            default: return "err";
        }
    }
    
    render(){
        console.log(this.props);
        return(
            <div>
                <Menu/>
                {this.getCenter()}
                
            </div>
        )
    }
}

export default Peekaboo;