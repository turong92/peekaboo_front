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
        console.log(this.props);
        console.log("asdfasdf");
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
            //url 파라미터로 contentId가 있다면 content(특정 글) 호출
            return <Content params={this.props.match.params}/>;
        }else {
            //url 파라미터로 contentId가 없다면 profile 호출
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