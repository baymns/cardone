import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/index';
import ServicesList from './components/ServicesList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/services">
            <ServicesList/>
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
