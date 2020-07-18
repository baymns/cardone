import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './signin.module.scss';
import { useDispatch } from 'react-redux';
import { regUser } from '../../../redux/actions/userActionCreator';

function Signin() {
  const dispatch = useDispatch();
  const initialState = { email: '', password: '' };
  const [inputs, setInputs] = useState(initialState);
  const [error, setError] = useState('');
  const history = useHistory();

  const signIn = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const user = await res.json()
    if (res.status === 200) {
      dispatch(regUser(user))
      setInputs(initialState);
      return history.push('/services');
    } else {
      setError('Неверный логин или пароль!')
    }
  };

  const changed = ({ target: { value, name } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  return (

    <div className={styles.signin_container}>
      <div className={styles.signin_block}>
        <h2>Вход</h2>
        <form onSubmit={(e) => signIn(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" onChange={changed} value={inputs.email} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input type="password" className="form-control" onChange={changed} value={inputs.password} name="password" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Войти</button>
        </form>
      <div className={styles.error}>{error}</div>
      </div>
    </div>
  );
}

export default Signin;
