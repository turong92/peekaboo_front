import React, { Component } from 'react';
import "../../../CSS/Home/Home.css";
import HomeCenter from "./HomeCenter";

import Profile from "../profile/profileCenter";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:"HOME",
    }
  }

  getCenter = () => {
    var _center = null;
    console.log(this.state.mode);
    switch (this.state.mode) {
      case "HOME":
        return <HomeCenter/>;
      case "PROFILE":
        return <Profile/>
      default: return "err";
    }
  }

  handleSelectMenu = (data) => {
    this.setState({mode:data});
  }

  render(){
    return (
      <div className="Home">
          {this.getCenter()}
      </div>
    );
  }
}

export default Home;