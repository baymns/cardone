import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
<<<<<<< HEAD
import Evaquator from './components/Evacuator';
import Home from './components/Home';
=======
import Home from './components/Home/index';
import ServicesList from './components/ServicesList'
>>>>>>> fbec7c2ee5bc9981f6342cb9837a9e0614b446bd

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route path="/evaquator">
            <Evaquator />
=======
          <Route path="/services">
            <ServicesList/>
>>>>>>> fbec7c2ee5bc9981f6342cb9837a9e0614b446bd
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
