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
                <div className=""></div>
                <div className="ProfileCenter-title">
                    <div className="ProfileCenter-title-form">
                        <div className="ProfileCenter-title-form-left">
                            <button className="testbtn">
                                <svg>
                                    <g>
                                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                                    </g>    
                                </svg>   
                            </button>
                        </div>
                        <div className="ProfileCenter-title-form-right">
                            <div className="ProfileCenter-title-right-top">이름</div>
                            <div className="ProfileCenter-title-right-bot">999트윗</div>
                        </div>
                    </div>
                </div>
                <div className="ProfileCenter-body">
                    <div className="ProfileCenter-body-1">
                        div:ProfileCenter-body-1 회색배경
                    </div>
                    <div className="ProfileCenter-body-2">
                        div:ProfileCenter-body-2 흰배경
                        <div className="ProfileCenter-body-2-head">사진 및 <button>프로필 설정</button></div>
                        <div className="ProfileCenter-body-2-body-1">이름 UserId: {this.props.userId}</div>
                        <div className="ProfileCenter-body-2-body-2">
                            <svg>
                                <g>
                                <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                                <circle cx="7.032" cy="8.75" r="1.285"></circle>
                                <circle cx="7.032" cy="13.156" r="1.285"></circle>
                                <circle cx="16.968" cy="8.75" r="1.285"></circle>
                                <circle cx="16.968" cy="13.156" r="1.285"></circle>
                                <circle cx="12" cy="8.75" r="1.285"></circle>
                                <circle cx="12" cy="13.156" r="1.285"></circle>
                                <circle cx="7.032" cy="17.486" r="1.285"></circle>
                                <circle cx="12" cy="17.486" r="1.285"></circle>
                                </g>
                            </svg>
                        </div>
                        <div className="ProfileCenter-body-2-bottom">77 팔로잉 팔로워 11명</div>
                    </div>
                    <div className="ProfileCenter-body-nav">
                        <div className="ProfileCenter-body-nav-1">트윗</div>
                        <div className="ProfileCenter-body-nav-2">트윗 및 답글</div>
                        <div className="ProfileCenter-body-nav-3">미디어</div>
                        <div className="ProfileCenter-body-nav-4">좋아요</div>
                    </div>

                    <div className="ProfileCenter-body-4">
                        <div className="ProfileCenter-body-4-ReadContents">        
                        <ReadContents data={this.state} condition={this.props.params}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowProfile;

//<ReadContents data={this.state} condition={this.props}/>
//                {this.props.userId}
