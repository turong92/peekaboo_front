import React, { Component } from 'react';
import "../../CSS/Home/HomeRight.css";
import Recommend from "./Recommend";

class HomeRight extends Component {
      render(){
    return (
      <div className="HomeRight">
          <Recommend></Recommend>
      </div>
    );
  }
}

export default HomeRight;