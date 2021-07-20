import ReadContents from "../common/ReadContents";
import "../../../CSS/center/Home/HomeCenter.css";
import React, { Component } from "react";

class ShowProfile extends Component {
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
                {this.props.userId}
                {this.props.contentId}
                <div className="HomeCenter-body">
                    <div className="HomeCenter-body-title">
                        <div className=""><h1>홈 <button className="BtnHome">별</button></h1></div>
                    </div>
                        <ReadContents data={this.state}/>
                </div>
            </div>
        );
    }
}

export default ShowProfile;