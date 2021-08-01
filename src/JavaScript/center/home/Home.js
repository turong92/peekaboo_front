import React, { Component } from 'react';
import "../../../CSS/center/Home/Home.css";
import HomeCenter from "./HomeCenter";
import HomeRight from "../../right/HomeRight";

class Home extends Component {
  constructor(props){
    super(props);
  }

  // getCenter = () => {
  //   var _center = null;
  //   console.log(this.state.mode);
  //   switch (this.state.mode) {
  //     case "HOME":
  //       return <HomeCenter/>;
  //     case "PROFILE":
  //       return <Profile/>
  //     default: return "err";
  //   }
  // }

  // handleSelectMenu = (data) => {
  //   this.setState({mode:data});
  // }

  render(){
    return (
      <div className="Home">
          <HomeCenter params={this.props.params}/>
          <HomeRight/>
      </div>
    );
  }
}

export default Home;