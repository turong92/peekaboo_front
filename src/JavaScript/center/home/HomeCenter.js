import React, { Component } from 'react';
import "../../../CSS/center/Home/HomeCenter.css";
import ReadContents from "../common/ReadContents";
import BoardupForm from "../../common/BoardupForm";

class HomeCenter extends Component {
  constructor(props){
    super(props);
    this.state = {
      content:null,
      idx:null,
      userId:null,
    }
  }

  handleCreate = (data) => {
    this.passContent(data);
  }

  passContent = (data) => {
    this.setState({
      content:data.content,
      idx:data.idx,
      userId:data.userId,
    });
  }

  render(){
    return (
      <div className="HomeCenter">
        
        <div className="HomeCenter-body">
        <div className="HomeCenter-body-title">
          <div className=""><h1>홈 <button className="BtnHome">별</button></h1></div>
        </div>
        
          <div className="boardup-form">
            <BoardupForm onCreate={this.handleCreate}/>
          </div>
            <ReadContents data={this.state}/>
        </div>
      </div>    
    );
  }
}

export default HomeCenter;