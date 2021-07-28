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
        //{this.props.userId} (userId) 기준으로 userProfile 상단에 출력
        //해당 유저작성글 기준으로 readContent로 받아와서 출력
        return(
            <div className="HomeCenter">
                {this.props.userId}
                <div className="HomeCenter-body">
                    <div className="HomeCenter-body-title">
                        <div className=""><h1>홈 <button className="BtnHome">별</button></h1></div>
                    </div>
                        
                    <div className="boardup-form">
                    
                    </div>
                    <ReadContents data={this.state} condition={this.props.params}/>
                </div>
                
            </div>
        );
    }
}

export default ShowProfile;