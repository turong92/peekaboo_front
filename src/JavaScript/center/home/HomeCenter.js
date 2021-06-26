import React, { Component } from 'react';
import "../../../CSS/Home/HomeCenter.css";
import ReadContents from "../common/ReadContents";
import BoardupForm from "../../common/BoardupForm";

class HomeCenter extends Component {
      render(){
    return (
      <div className="HomeCenter">
        <div className="Hometitle">
          <div className=""><h1>홈 <button className="BtnHome">dd</button></h1></div>
                    <div></div>
                </div>
                <div>
                    <BoardupForm onCreate={this.handleCreate}/>
                </div>
          <ReadContents/>
      </div>
    );
  }
}

export default HomeCenter;