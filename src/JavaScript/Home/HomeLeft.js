import React, { Component } from 'react';
import "../../CSS/Home/HomeLeft.css";
import Menu from "../left/Menu";

class HomeLeft extends Component {

  handleSelectMenu = (data) => {
    this.props.onSelectMenu(data);
  }

  render(){
    return (
      <div className="HomeLeft">
          <Menu handleSelectMenu={this.handleSelectMenu}/>
      </div>
    );
  }
}

export default HomeLeft;