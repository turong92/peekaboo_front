import React, { Component } from 'react';
import "../../CSS/User/Login.css";

class Login extends Component {
 /*   
    constructor(props){
        super(props);
      
        const [Id, setId] = useState("")
        const [Password, setPassword] = useState("")
        }
  */  
      render(){
    return (

      <div className="Login">

            <form className="">
                <h1>로그인 페이지</h1>
                <h4>
                <label> ID </label>
                <input type="text" placeholder="Id" required autoFocus />
                </h4>
                <h4>
                <label> Password</label>
                <input type="password" placeholder="Password" required />
                </h4>
                <button className="" >Login</button>
            </form>
      </div>
    );
  }
}

export default Login;