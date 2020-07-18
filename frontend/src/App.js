import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Evaquator from './components/Evacuator';
import Home from './components/Home/index';
import ServicesList from './components/ServicesList'
import Signin from './components/Auth/Signin/index';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/evacuator">
            <Evaquator />
          </Route>
          <Route path="/services">
            <ServicesList />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
