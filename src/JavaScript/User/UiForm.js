import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import "../../CSS/User/UiForm.css";
import {Link, } from 'react-router-dom';
import imgNaver from "../../Img/sns/naver.png";
import imgKakao from "../../Img/sns/kakao.png";
import imgGoogle from "../../Img/sns/google.svg";
import imgfacebook from "../../Img/sns/facebook.png";

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
                        <div className="logintitle">PEECABOOO</div>
                        <div className="loginbtn">
                            <div className="snslogin facebookbtn" role="button">
                                <a href="http://localhost:8080/oauth2/authorization/google" className="btn2">
                                <img className="snsimg" src={imgfacebook}/>Log in with Facebook</a></div>
                            </div>
                        <div className="loginbtn">
                            <div className="snslogin googlebtn" role="button">
                                <a href="http://localhost:8080/oauth2/authorization/google" className="btn2" >
                                <img className="snsimg" src={imgGoogle} width={45} height={45}/>Log in with Google</a></div>
                            </div>    
                        <div className="loginbtn">
                            <div className="snslogin naverbtn"  role="button">
                                <a href="http://localhost:8080/oauth2/authorization/google" className="btn3">
                                <img className="snsimg" src={imgNaver} />Log in with Naver</a></div>
                            </div>
                        <div className="loginbtn">
                            <div className="snslogin kakaobtn"  role="button">
                                <a href="http://localhost:8080/oauth2/authorization/google" className="btn4">
                                <img className="snsimg" src={imgKakao}/>Log in with Kakao</a></div>
                            </div>
                    </form>
                    <footer>
                        
                    </footer>
                </div>
            </div>
        </div>
    );

}

};

export default UiForm;


//<div className="Main">
//<div className="Login">
//    <form className="loginform">
//        <div className="logintitle">PEECABOO</div>
//            <h3>로그인</h3>
//           <input className="email" label="email" name ="email" placeholder="이메일" type="email"/>
//           <input className="email" label="password" name ="password" placeholder="비밀번호" type="password" />
//        <button className="btn1">Login</button>
//    </form>
//    <footer>
//    <Link to="/signup">회원가입</Link>
//    </footer>
//</div>
//</div>