import React, { Component } from 'react';
import "../../../CSS/center/Home/HomeCenter.css";
import ReadContents from "../common/ReadContents";
import BoardupForm from "../../common/BoardupForm";

class HomeCenter extends Component {
  constructor(props){
    super(props);
    this.state = {
      content:null
    }
  }

  handleCreate = (data) => {
    this.passContent(data);
  }

  passContent = (data) => {
    this.setState({content:data});
    return data;
  }

  render(){
    return (
      <div className="HomeCenter">
        <div className="Hometitle">
          <div className=""><h1>홈 <button className="BtnHome">dd</button></h1></div>
        </div>
          <div>
            <div>
              <BoardupForm onCreate={this.handleCreate}/>
            </div>
            <ReadContents content={this.state.content}/>
          </div>
        </div>    
    );
  }
}

export default HomeCenter;