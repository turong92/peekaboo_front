import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import "../../CSS/User/UiForm.css";
import {Link, } from 'react-router-dom';

class UiForm2 extends Component {

render(){


    return(
        <div>
            <div className="Main">
                <div className="Login">
                    <form className="loginform">
                        <div className="logintitle">PEECABOO</div>
                            <h3>회원가입</h3>
                           <input className="email" label="email" name ="email" placeholder="이메일" type="email"/>
                           <input className="email" label="password" name ="password" placeholder="비밀번호" type="password" />
                           <input className="email" label="password" name ="password" placeholder="비밀번호" type="password" />
                           <input className="email" label="password" name ="password" placeholder="비밀번호" type="password" />
                        <button className="btn1">Login</button>
                    </form>
                    <footer>
                    <Link to="/login">로그인</Link>
                    </footer>
                </div>
            </div>
        </div>
    );

}

};

export default UiForm2;