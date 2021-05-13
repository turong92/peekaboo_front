import React from 'react';

class Login extends React.Component {
    render () {
        return (
            <form className="form-Login">
                <h1>로그인 페이지</h1>
                <label for="inpEmail" className="sr-only"> ID </label>
                <input type="text" id="inputid" className="form-control" placeholder="Id or Email address" required autoFocus />
                <label for="inpPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="" >Login</button>
            </form>

        )
    }
    handleIdChange(e){
        this.setState({id:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
};



export default Login;
