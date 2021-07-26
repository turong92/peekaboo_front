import ReadContents from "../common/ReadContents";
import "../../../CSS/center/profile/Profile.css";
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
            <div className="ProfileCenter">
                <div className="ProfileCenter-title">
                </div>
                <div className="ProfileCenter-body">
                    <div className="ProfileCenter-body-1">
                        div:ProfileCenter-body-1 회색배경
                    </div>
                    <div className="ProfileCenter-body-2">
                        div:ProfileCenter-body-2 흰배경
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ProfileCenter-body-3">
                        div: ProfileCenter-body-3 트윗/트윗 및 답글/미디어 /마음에들어요 
                    </div>
                    <div className="ProfileCenter-body-4">
                        div: ProfileCenter-body-4 
                    <ReadContents data={this.state} condition={this.props}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowProfile;

//<ReadContents data={this.state} condition={this.props}/>
//                {this.props.userId}
