import axios from 'axios';
import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            userId:null,
            userName:null
        }
    }

    componentDidMount(){
        axios.post("/principalDetails")
        .then(response => {
            console.log(response);
            this.setState({userId:response.data.userId,
                            userName:response.data.userName});
            const { userId, userName } = this.state;
            window.sessionStorage.setItem('userId', userId);
            window.sessionStorage.setItem('userName', userName);
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
        var _userId = "";
        var _userName = "";
        if(this.state.userId !== null && this.state.userName != null){
            _userId = this.state.userId;
            _userName = this.state.userName;
        }
        return(
            <div>
                ID : {_userId}
                Name : {_userName}
                <a href="http://localhost:8080/oauth2/authorization/google" className="btn btn-success active" 
                role="button">Google Login</a>
                <input type="button" value="test" onClick={this.testFunction}></input>
            </div>
        );
    }
}

export default SignIn;

//<a href="/oauth2/authorization/google" className="btn btn-success active" role="button">Google Login</a>