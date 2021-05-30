import axios from 'axios';
import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:null
        }
    }

    componentDidMount(){
        axios.post("/get-my-id")
        .then(response => {
            console.log(response);
            this.setState({id:response.data});
        })
        .catch(e => {
            console.log(e);
        });
    }

    testFunction = () => {
        axios.post("/session-test")
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.error(e);
        });
    }

    render(){
        var _id = "";
        if(this.state.id !== null){
            _id = this.state.id;
        }
        return(
            <div>
                ID : {_id}
                <a href="http://localhost:8080/oauth2/authorization/google" className="btn btn-success active" 
                role="button">Google Login</a>
                <input type="button" value="test" onClick={this.testFunction}></input>
            </div>
        );
    }
}

export default SignIn;

//<a href="/oauth2/authorization/google" className="btn btn-success active" role="button">Google Login</a>