import React, {useState} from 'react';
import Axios from 'axios';




function Signup(props) {

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
     
        return (
            <div>
            <form className="form-Login">
                <h1>회원가입 페이지</h1>
                <h4><label> ID </label>
                    <input type="email" placeholder="Email address" required autoFocus />
                    <button className="">중복체크</button>
                </h4>
                <h4><label> 닉네임</label>
                    <input type="text"placeholder="nickname" required />
                    <button className="">중복체크</button>
                </h4>
                <h4><label> Password</label>
                    <input type="password"placeholder="Password" required />
                </h4>
                <h4><label> Password 확인</label>
                    <input type="password"placeholder="Password check" required />
                    <button className="">비밀번호 확인</button>
                </h4>
                <button className="" >Signup</button>
            </form>
                {/* <div>
                    <h3>id : {}</h3>
                    <h3>nickname : {} </h3>
                    <h3>password : {} </h3>
                </div> */}
            </div>
        )
    
}



export default Signup;
