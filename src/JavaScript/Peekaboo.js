import React, { Component } from "react";
import Menu from "../JavaScript/left/Menu";
import Home from "./center/home/Home";
import Profile from "./center/profile/profileCenter";
import Content from "./center/content/Content";

import "../CSS/left/leftSpace.css";

class Peekaboo extends Component {
    constructor(props) {
        super(props);
    }

    getCenter = () => {
        switch (this.props.match.params.selectedMenu) {
            case "home":
                return <Home/>;
            case "profile":
                return <Profile/>;
            default: {
                return this.getProfile();
            };
        }
    }

    getProfile = () => {
        if(this.props.match.params.contentId){
            //이거대신 content 목록으로 수정해야합니다.
            return <Content contentId={this.props.match.params.contentId}/>;
        }else {
            return <Profile userId={this.props.match.params.selectedMenu}/>;
        }
    }
    
    render(){
        return(
            <div>
                <div className="leftSpace"><Menu/></div>
                {this.getCenter()}
                
            </div>
        )
    }
}

export default Peekaboo;