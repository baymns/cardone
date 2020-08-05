import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/userActionCreator';

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await fetch('/api/logout');
      dispatch(logoutUser());
      return history.push('/');
    })();
  }, [dispatch, history]);
  return (
    <div>Logout...</div>
  );
}

export default Logout;
