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
          botNumber: ["0","1","2"],
        }
    }
    render(){
        const botNumber = 0;
        //{this.props.userId} (userId) 기준으로 userProfile 상단에 출력
        //해당 유저작성글 기준으로 readContent로 받아와서 출력
        return(
          <div className="Profileform">  
            <div className="ProfileCenter">
                <div className=""></div>
                <div className="ProfileCenter-title">
                    <div className="ProfileCenter-title-form">
                        <div className="ProfileCenter-title-form-left">
                            <button className="ProfileCenter-title-form-left-btn">
                                <svg>
                                    <g>
                                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                                    </g>    
                                </svg>   
                            </button>
                        </div>
                        <div className="ProfileCenter-title-form-right">
                            <div className="ProfileCenter-title-right-top">
                                <h2>이름</h2>
                            </div>
                            <div className="ProfileCenter-title-right-bot">
                                {
                                    {
                                        0 : <div> [숫자] 트윗 </div>,
                                        1 : <div> [숫자] 사진 및 동영상 </div>,
                                        2 : <div> [숫자] 마음에 들어요 </div>
                                    } [botNumber]
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ProfileCenter-section">
                    <div className="ProfileCenter-section1">
                    </div>
                    <div className="ProfileCenter-section2">
                        
                        <div className="ProfileCenter-section2-head">
                            <div className="ProfileCenter-section2-head-left">
                            
                            <div className="ProfileCenter-section2-head-left-img">
                            <img alt="" draggable="true" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" class="css-9pa8cd"/>
                            </div>
                            
                            </div>
                            <div className="ProfileCenter-section2-head-right">
                                <div className="ProfileCenter-section2-head-right-btn-div">
                                <button className="ProfileCenter-section2-head-right-btn">
                                    <span>프로필 설정하기</span>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="ProfileCenter-section2-section1">
                            <div className="ProfileCenter-section2-section1-title"><span>이름 : 이해준</span></div>   
                            <div className="ProfileCenter-section2-section1-section"><span>UserId: {this.props.userId}</span></div>
                        </div>
                        <div className="ProfileCenter-section2-section2">
                            <div className="ProfileCenter-section2-section2-div">
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
                                <span> 가입일: 2021년 8월 02일</span>
                            </div>
                        </div>
                        <div className="ProfileCenter-section2-bottom">
                            <div className="ProfileCenter-section2-bottom-div">
                                <div className="ProfileCenter-section2-bottom-div-follow">
                                    <span className="span-number">77 </span>
                                    <span className="span-follow">팔로잉</span>
                                </div>
                                <div className="ProfileCenter-section2-bottom-div-follow">
                                    <span className="span-number">77 </span>
                                    <span className="span-follow">팔로워</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ProfileCenter-section-nav">
                        <div className="ProfileCenter-section-nav1">
                            <div className="ProfileCenter-section-nav1-text">
                                트윗
                                <div className="ProfileCenter-section-nav1-line"></div>
                            </div>
                            
                        </div>
                        <div className="ProfileCenter-section-nav2">  
                            <div className="ProfileCenter-section-nav2-text">
                                트윗 및 답글
                                
                                <div className="ProfileCenter-section-nav1-line"></div>
                            </div>
                        </div>
                        <div className="ProfileCenter-section-nav3">
                            <div className="ProfileCenter-section-nav3-text">
                                미디어
                                
                                <div className="ProfileCenter-section-nav1-line"></div>
                            </div>
                        </div>    
                        <div className="ProfileCenter-section-nav4">                           
                            <div className="ProfileCenter-section-nav4-text">
                                마음에 들어요
                                
                                <div className="ProfileCenter-section-nav1-line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="ProfileCenter-section4">
                        <div className="ProfileCenter-section4-ReadContents">        
                        <ReadContents data={this.state} condition={this.props.params}/>
                        </div>
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
