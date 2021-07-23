import ReadContents from "../common/ReadContents";
import "../../../CSS/center/Home/HomeCenter.css";
import React, { Component } from "react";

class ContentCenter extends Component {
    constructor(props){
        super(props);
        this.state = {
          content:null,
          idx:null,
          userId:null,
        }
    }
    render(){
        return(
            <div className="HomeCenter">
                <div className="HomeCenter-body">
                {this.props.contentId}
                    <div className="HomeCenter-body-title">
                        <div className=""><h1>뒤로가기 <button className="BtnHome">별</button></h1></div>
                    </div>
                        
                    <div className="boardup-form">
                        
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default ContentCenter;