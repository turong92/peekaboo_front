import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import "../../CSS/User/Signup.css";


class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
        Email:'abc@naver.com',
        Name:'이해준', 
        Password:'1234',
        ConfirmPassword:'1234',     
    };
    // 임시
    
}

    handleOnChange = (e) => {
        this.setState({
        })
    }
    handleClick(e) {
        this.setState({
        });
    }s


   /* onSignupHandler = () => {
        this.setState((state) => {Email : state.email })
    }
    */

    // 기본 this.state 내용을 버튼 클릭으로 setstate 으로 변경하는 이벤트

    /*constructor(props){
        super(props);
      
        const [Email, setEmail] = useState("")
        const [Name, setName] = useState("")
        const [Password, setPassword] = useState("")
        const [ConfirmPassword, setConfirmPassword] = useState("")
        }
   */
      render(){
          const {Email, Name, Password, ConfirmPassword} = this.state;
    return (

        <div className="Signup">
            <form className="" onChange={this.handleOnChange} >
                <h1>회원가입 페이지</h1>
                    <h4><label> ID </label>
                    <input type="email" placeholder="Email address" required autoFocus />
                </h4>
                <h4><label> 닉네임</label>
                    <input type="text"placeholder="nickname" required />
                </h4>
                <h4><label> Password</label>
                    <input type="password"placeholder="Password" required />
                </h4>
                <h4><label> Password 확인</label>
                    <input type="password"placeholder="Password check" required />
                    <button className="">비밀번호 확인</button>
                </h4>
                <button className="" onClick={this.handleClick} >Signup</button>
            </form>


            { <div>
                <h3>Email : {Email}</h3>
                <h3>Name : {Name} </h3>
                <h3>Password : {Password} </h3>
                <h3>ConfirmPassword : {ConfirmPassword} </h3>
                
            </div> }
        </div>
    );
  }
}

export default Signup;