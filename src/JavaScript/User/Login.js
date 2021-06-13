import React, { Component } from 'react';
import "../../CSS/User/Login.css";
import SignIn from '../SignIn/SignIn';
import UiForm from "./UiForm";
import {Route} from 'react-router-dom';


class Login extends Component {
  render(){
    return (
      <div className="Login">
        <UiForm>
        </UiForm>
        <Route exact path="/login/sign-in"><SignIn></SignIn></Route>
      </div>
    );
  }
}






export default Login;