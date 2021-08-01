import React, { Component } from 'react';
import "../../../CSS/center/Home/Home.css";
import ContentCenter from "./ContentCenter.js";
//import ContentRight from "../../right/ContentRight";

class Content extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="Home">
          <ContentCenter params={this.props.params}/>
      </div>
    );
  }
}

export default Content;