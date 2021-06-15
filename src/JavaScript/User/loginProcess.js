import React, { useEffect } from "react";
import axios from 'axios';

const LoginProcess = (props) => {
    useEffect(() => {
        axios.post("/principalDetails")
            .then(response => {
                console.log(response);
                const userId = response.data.userId;
                const userName = response.data.userName;
    
                const userData = { userId:userId, userName:userName };
                
                window.sessionStorage.setItem('userId', userId);
                window.sessionStorage.setItem('userName', userName);
                window.localStorage.setItem('userId', userId);
                window.localStorage.setItem('userName', userName);
                props.history.pushState(null,null,"/home");
    
            })
            .catch(e => {
                console.log(e);
                // const userId = "google_115854284849039362768";
                // const userName = "전수민";
    
                // const userData = { userId:userId, userName:userName };
                
                // window.sessionStorage.setItem('userId', userId);
                // window.sessionStorage.setItem('userName', userName);
                // window.localStorage.setItem('userId', userId);
                // window.localStorage.setItem('userName', userName);
    
                // dispatch(userActions.loginUser(userData));
            });
    }, []);
    return (
        <div />
    )
};

export default LoginProcess;