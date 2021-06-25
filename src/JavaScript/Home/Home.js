import React, { Component } from 'react';
import "../../CSS/Home/Home.css";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import HomeCenter from "./homeCenter/homeCenter";

import Profile from "./homeCenter/profile";

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
          <HomeLeft onSelectMenu={this.handleSelectMenu}/>
          {this.getCenter()}
          <HomeRight/>
      </div>
    );
  }
}

export default Home;