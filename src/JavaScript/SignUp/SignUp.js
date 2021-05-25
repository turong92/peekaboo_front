import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            re : /^[a-zA-Z0-9]{4,12}$/, 
            // 아이디와 패스워드가 적합한지 검사할 정규식
            re2 : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
            // 이메일이 적합한지 검사할 정규식
            regul3 : /^[가-힝a-zA-Z]{2,}$/,
            // 이름 정규식
            id:"",
            password:""
        }
    }

    inputFormHandler = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    signUpConfirm = () => {
        var obj = {id:this.state.id, password:this.state.password};
        console.log(obj);
        axios.post('/sign-up-confirm', obj)
        .then(response => {
            console.log(response);
            window.alert(response.data);
        })
        .catch(e => {
            console.error(e);
        });
    }

    render(){
        return (
            <div>
                <div><input type="text" name="id" placeholder="아이디" onChange={this.inputFormHandler}></input></div>
                <div><input type="password" name="password" placeholder="비밀번호" onChange={this.inputFormHandler}></input></div>
                <div><input type="button" value="가입" onClick={this.signUpConfirm}></input></div>
            </div>
        );
    }
}

export default SignUp;