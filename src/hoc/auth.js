import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default (SpecialComponent, option, adminRoute=null) => {
    /* 
     예)  option: null -> 누구나 출입이 가능한 페이지 (ex :/)
                 true -> 로그인한 유저만 출입이 가능한 페이지
                 false -> 로그인한 유저는 출입이 불가능한 페이지
  */

    const AuthenticateCheck = (props) => {
        // const dispatch = useDispatch();
        // const user = useSelector((state) => state.user);
        // console.log("user", user);
        // const loginSuccess = useSelector((state) => state.user.loginSuccess);
        // console.log("loginSuccess", loginSuccess);
        
        //console.log(loginSuccess.userData);

        const userId = window.localStorage.getItem("userId");

        useEffect(() => {
            console.log("1");
            if(!userId){
                console.log("not");
                if(option!==null){
                    console.log("login");
                    props.history.push("/login");
                }
            }else{
                console.log("already");
                if(!option){
                    console.log("home");
                    props.history.push("/home");
                }
            }

        }, []);

        return (
            <SpecialComponent />
        )
    };

    return AuthenticateCheck;
}