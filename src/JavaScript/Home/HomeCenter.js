import React, { Component } from 'react';
import "../../CSS/Home/HomeCenter.css";
import ReadContents from "./ReadContents";

class HomeCenter extends Component {
      render(){
    return (
      <div className="HomeCenter">
          <ReadContents></ReadContents>
      </div>
    );
  }
}

export default HomeCenter;