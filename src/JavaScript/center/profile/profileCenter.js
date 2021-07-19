import ReadContents from "../common/ReadContents";
import React, { Component } from "react";

class ShowProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
          content:null,
          idx:null,
          userId:null,
        }
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <div>name space</div>
                <div>banner space</div>
                <div>info space</div>
                <div>select space</div>
                <ReadContents data={this.state}/>
            </div>
        );
    }
}

export default ShowProfile;