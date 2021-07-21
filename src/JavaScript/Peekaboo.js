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
        console.log(this.props);
        console.log("asdfasdf");
        switch (this.props.match.params.selectedMenu) {
            case "/home":
                return <Home/>;
            case "/profile":
                return <Profile/>;
            default: {
                //서버에 id 있는지 체크하고, 없으면 err 있으면 profile page return
                console.log("props");
                console.log(this.props);
                console.log(this.props.match.params);
                return <Profile userId={this.props.match.params.selectedMenu} contentId={this.props.match.params.contentId}/>;
            };
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