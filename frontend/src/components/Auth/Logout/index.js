import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/userActionCreator';

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/logout');
      dispatch(logoutUser());
      return history.goBack();
    })();
  }, []);
  return (
    <div>Logout...</div>
  );
}

export default Logout;
