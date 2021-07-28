import ReadContents from "../common/ReadContents";
import CenterTopContents from "../content/CenterTopContent"
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
        //{this.props.params.selectedMenu} (userId) 기준으로 {this.props.params.contentId} 선택된 글 상단에 출력
        //해당글에 달린 리플들 하단에 readContent로 받아와서 출력
        return(
            <div className="HomeCenter">
                <div className="HomeCenter-body">
                    <div className="HomeCenter-body-title">
                        <div className=""><h1>뒤로가기 <button className="BtnHome">별</button></h1></div>
                    </div>
                        
                    <div className="boardup-form">
                        <CenterTopContents/>
                    </div>
                    <ReadContents data={this.state} condition={this.props.params}/>
                </div>
                
            </div>
        );
    }
}

export default ContentCenter;