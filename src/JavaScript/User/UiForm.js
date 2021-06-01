import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import "../../CSS/User/UiForm.css";
import {Link, } from 'react-router-dom';

class UiForm extends Component {

render(){
/*
    constructor(props) {
        super(props);

        state ={
            email: "",
            password: "",
        };
    }
*/
    return(
        <div>
            <div className="Main">
                <div className="Login">
                    <form className="loginform">
                        <div className="logintitle">PEECABOO</div>
                            <h3>로그인</h3>
                           <input className="email" label="email" name ="email" placeholder="이메일" type="email"/>
                           <input className="email" label="password" name ="password" placeholder="비밀번호" type="password" />
                        <button className="btn1">Login</button>
                    </form>
                    <footer>
                    <Link to="/signup">회원가입</Link>
                    </footer>
                </div>
            </div>
        </div>
    );

}

};

export default UiForm;