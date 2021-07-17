import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";

import './index.css';
import Main from './JavaScript/Main/Main';

import Peekaboo from './JavaScript/Peekaboo';

import Login from './JavaScript/User/Login';
import LoginProcess from './JavaScript/User/loginProcess';
import Auth from './hoc/auth';

import reducer from "./reducers";
import * as userActions from './actions/userAction';


const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);


function App(){
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = { userId:window.localStorage.getItem("userId"),
                        userName:window.localStorage.getItem("userName")};
    if(userInfo.userId === null) return;
    dispatch(userActions.loginUser(userInfo));
  })

  return(
    <div>
      <Switch>
        <Route exact path="/" component={Auth(Main, null)} />
        <Route exact path="/login" component={Auth(Login, false)} />
        <Route exact path="/loginProcess" component={Auth(LoginProcess, false)} />
        <Route path="/" component={Auth(Peekaboo, true)} />
      </Switch>
    </div>
  )
}

ReactDOM.render(
    <Provider
      store={createStoreWidthMiddleware(
        reducer,
        //개발자 도구를 사용하기 위한 설정
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

/*
<Route exact path="/" component={Main} />
         <Route path="/home" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/">Not Found</Route>
*/



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import {HashRouter, Route, Switch, NavLink, useParams} from 'react-router-dom';

// function Home(){
//   return(
//     <div>
//       <h2>Home</h2>
//       Home...
//     </div>
//   )
// }

// var contents = [
//   {id:1, title:"HTML", description:"HTML is..."},
//   {id:2, title:"JS", description:"JS is..."},
//   {id:3, title:"React", description:"React is..."}
// ]

// function Topic(){
//   var params = useParams();
//   var topic_id = params.topic_id;
//   var selected_topic = {
//     title:"Empty",
//     decription:"404"
//   }
//   for(var i=0;i<contents.length;i++){
//     if(contents[i].id === Number(topic_id)){
//       selected_topic = contents[i];
//       break;
//     }
//   }
//   return(
//     <div>
//       <h3>{selected_topic.title}</h3>
//       {selected_topic.description}
//     </div>
//   );
// }

// function Topics(){
//   var lis = [];
//   for(var i=0;i<contents.length;i++){
//     lis.push(<li key={contents[i].id}><NavLink to={"/topics/"+contents[i].id}>{contents[i].title}</NavLink></li>)
//   }
//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         {lis}
//       </ul>
//       <Route path="/topics/:topic_id"><Topic></Topic></Route>
//       {/* <Switch>
//         <Route path="/topics/1">HTML is...</Route>
//         <Route path="/topics/2">JS is...</Route>
//         <Route path="/topics/3">React is...</Route>
//       </Switch> */}
//     </div>
//   )
// }

// function Contact(){
//   return(
//     <div>
//       <h2>Contact</h2>
//       Contact...
//     </div>
//   )
// }

// function App(){
//   return(
//     <div>
//       <h1>React Router DOM example</h1>
//       <ul>
//         <li><NavLink exact to="/">Home</NavLink></li>
//         <li><NavLink to="/topics">Topics</NavLink></li>
//         <li><NavLink to="/contact">Contact</NavLink></li>
//       </ul>
//       <Switch>
//         <Route exact path="/"><Home></Home></Route>
//         <Route path="/topics"><Topics></Topics></Route>
//         <Route path="/contact"><Contact></Contact></Route>
//         <Route path="/">Not Found</Route>
//       </Switch>
//     </div>
//   )
// }

// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
