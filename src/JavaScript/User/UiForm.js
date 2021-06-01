import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import "../../CSS/User/UiForm.css";
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
                        <div className="loginbtn ">
                            <a href="http://localhost:8080/oauth2/authorization/google" className="btn1" role="button">Facebook Login</a></div>
                        <div className="loginbtn">
                            <a href="http://localhost:8080/oauth2/authorization/google" className="btn2" role="button">Google Login</a></div>
                        <div className="loginbtn">
                            <a href="http://localhost:8080/oauth2/authorization/google" className="" role="button">Naver Login</a></div>
                        <div className="loginbtn">
                            <a href="http://localhost:8080/oauth2/authorization/google" className="btn4 btn-success active" role="button">Kakao Login</a></div>
                    </form>
                    <footer>
                        푸터 영역
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