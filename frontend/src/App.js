import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Profile from './components/Profile/index';
import Feedback from './components/Feedback';
import ShowFeedbackList from './components/ShowFeedbackList';
import FotoEditor from './components/Foto';

const componentsForModal = {
  signin: Signin,
  signup: Signup,
  evacuator: Evacuator,
  feedback: Feedback,
  showfeedbacklist: ShowFeedbackList,
  foto: FotoEditor,
};

function App() {
  const modalState = useSelector((state) => state.modal);
  const CurrentModal = componentsForModal[modalState.show];
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
    return () => {
      console.log('Component unmount');
      window.removeEventListener('load')
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        {
          <Modal>
            {modalState.show && <CurrentModal {...modalState.props} />}
          </Modal>
        }
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
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
          <Route path="/autorefuelling">
            <ServicesList category={'автозаправка'} />
          </Route>
          <Route path="/signin" render={props => (
            <Signin {...props} />
          )}>
          </Route>
          <Route path="/signup" render={props => (
            <Signup {...props} />
          )}>
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
