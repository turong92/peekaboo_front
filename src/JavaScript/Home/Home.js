import React, { Component } from 'react';
import "../../CSS/Home/Home.css";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import HomeCenter from "./HomeCenter";

class Home extends Component {
      render(){
    return (
      <div className="Home">
          <HomeLeft></HomeLeft>
          <HomeRight></HomeRight>
          <HomeCenter></HomeCenter>
      </div>
    );
  }
}

export default Home;