import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/count';
import * as userActions from '../../actions/userAction';

const SignIn = () => {
    const dispatch = useDispatch();
    const [localCount, setLocalCount] = useState(0);

    const { count: storeCount } = useSelector((state) => state.count);

    useEffect(() => {
        console.log("Component did mount.");
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

            dispatch(userActions.loginUser(userData));
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

    const increaseCount = useCallback(() => {
        setLocalCount(localCount + 1);
        dispatch(actions.increaseCount());
    }, [localCount, dispatch]);

    const decreaseCount = useCallback(() => {
        setLocalCount(localCount - 1);
        dispatch(actions.decreaseCount());
    }, [localCount, dispatch]);

    return (
        <>
          {'Function component'}
          <div>
            <div>
              {`localCount: ${localCount}`}
            </div>
            <div>
              {`storeCount: ${storeCount}`}
            </div>
          </div>
          <div onClick={increaseCount}>
            {'+'}
          </div>
          <div onClick={decreaseCount}>
            {'-'}
          </div>
        </>
      )
};

export default SignIn;


// import axios from 'axios';
// import React, { Component } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from "../../actions/userAction";

// class SignIn extends Component {
//     constructor(props){
//         super(props);
        

//         this.state = {
//             userId:null,
//             userName:null
//         }
//     }

//     componentDidMount(){
//         axios.post("/principalDetails")
//         .then(response => {
//             console.log(response);
//             this.setState({userId:response.data.userId,
//                             userName:response.data.userName});
//             const { userId, userName } = this.state;
//             window.sessionStorage.setItem('userId', userId);
//             window.sessionStorage.setItem('userName', userName);
//         })
//         .catch(e => {
//             console.log(e);
//         });
//     }

//     testFunction = () => {
//         axios.post("/session-test")
//         .then(response => {
//             console.log(response);
//         })
//         .catch(e => {
//             console.error(e);
//         });
//     }

//     render(){
//         var _userId = "";
//         var _userName = "";
//         if(this.state.userId !== null && this.state.userName != null){
//             _userId = this.state.userId;
//             _userName = this.state.userName;
//         }
//         return(
//             <div>
//                 ID : {_userId}
//                 Name : {_userName}
//                 <a href="http://localhost:8080/oauth2/authorization/google" className="btn btn-success active" 
//                 role="button">Google Login</a>
//                 <input type="button" value="test" onClick={this.testFunction}></input>
//             </div>
//         );
//     }
// }

// export default SignIn;

// //<a href="/oauth2/authorization/google" className="btn btn-success active" role="button">Google Login</a>