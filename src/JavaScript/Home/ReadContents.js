import React, { Component } from 'react';
import axios from 'axios';

class ReadContents extends Component {
    constructor(props){
        super(props);
        this.state = {
            contents:[
                {id:"전수민", content:"이해준바보"},
                {id:"이해준", content:"이해준바보"},
                {id:"박명훈", content:"이해준바보"}
            ]
        }
    }

    getReadContent(){
        return this.state.contents[0].id;
    }

    // getContents = (e) => {
    //     axios.post("/read-home-contents")
    //     .then(function(response){
    //         var i=0;
    //         while(i<response.data.length){
    //             console.log(response.data[i]);
    //             var _content = Object.assign(this.state.contents);
    //             console.log("test");
    //             _content.push(response.data[i]);
    //             //this.setState({contents:_content})
    //             i = i + 1;
    //         }
    //     })
    //     .catch(function(error){
    //         console.log("error");
    //     })
    // }

    render(){
        return(
            <div className="ReadContents">
                {this.getReadContent()}
            </div>
        );
    }
}

export default ReadContents;