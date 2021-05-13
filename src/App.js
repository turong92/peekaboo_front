import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Main from './Main';


function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Main" component={Main} />
    </div>
  );
}

export default App;
