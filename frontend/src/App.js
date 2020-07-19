import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Evaquator from './components/Evacuator';
import Home from './components/Home/index';
import ServicesList from './components/ServicesList'
import Signin from './components/Auth/Signin/index';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout/index';


function App() {

  function handleLoad() {
    window.ymaps.ready(() => {
      new window.ymaps.Map('map', { center: [55.751574, 37.573856], zoom: 9 }, {
        searchControlProvider: 'yandex#search'
      });
    });
  }

  useEffect(() => {
    window.addEventListener('load', handleLoad());
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/evacuator" >
            <Evaquator />
          </Route>
          <Route path="/services">
            <ServicesList category={'автосервис'}/>
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
    <div id="map"></div>
    </div>
  );
}

export default App;
