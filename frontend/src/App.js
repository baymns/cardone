import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from './components/Modal';
import Navbar from './components/Navbar';
import Evaquator from './components/Evacuator';
import Home from './components/Home/index';
import ServicesList from './components/ServicesList';
import Signin from './components/Auth/Signin/index';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout/index';
import Evacuator from './components/Evacuator';
import Footer from './components/Footer'

const componentsForModal = {
  signin: Signin,
  signup: Signup,
  evacuator: Evacuator,
};

function App() {
  const modalState = useSelector((state) => state.modal.show);
  console.log(modalState);

  const CurrentModal = componentsForModal[modalState];
  console.log(CurrentModal);
  function handleLoad() {
    window.ymaps.ready(() => {
      new window.ymaps.Map(
        'map',
        { center: [55.751574, 37.573856], zoom: 9 },
        {
          searchControlProvider: 'yandex#search',
        },
      );
    });
  }

  useEffect(() => {
    window.addEventListener('load', handleLoad());
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        {<Modal>{modalState && <CurrentModal />}</Modal>}
        <Switch>
          <Route path="/evacuator">
            <Evaquator />
          </Route>
          <Route path="/services">
            <ServicesList category={'автосервис'} />
          </Route>
          <Route path="/tireservices">
            <ServicesList category={'шиномонтаж'} />
          </Route>
          <Route path="/autoparts">
            <ServicesList category={'автозапчасти'} />
          </Route>
          <Route path="/carwash">
            <ServicesList category={'автомойка'} />
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
      <Footer/>
    </div>
  );
}

export default App;
