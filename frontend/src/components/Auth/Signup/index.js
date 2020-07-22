import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './signup.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { regUser } from '../../../redux/actions/userActionCreator';

function Signup() {
  const dispatch = useDispatch()
  const initialState = { name: '', email: '', password: '' };
  const [inputs, setInputs] = useState(initialState);
  const [error, setError] = useState('');
  const history = useHistory();
  const signUp = async (event) => {
    event.preventDefault();
    
    const req = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const user = await req.json();
    console.log(user);
    if (user.id) {
      dispatch(regUser(user))
      setInputs(initialState);
      return history.push('/');
    } else {
      setError(user)
    }
    
  };

  const changed = ({ target: { value, name } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  return (

    <div className={styles.signin_container}>
      <div className={styles.signin_block}>
        <h2>Регистрация</h2>
        <form onSubmit={(e) => signUp(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Имя</label>
            <input type="text" className="form-control" onChange={changed} value={inputs.name} name="name" id="exampleInputname1" aria-describedby="nameHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" onChange={changed} value={inputs.email} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input type="password" className="form-control" onChange={changed} value={inputs.password} name="password" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </form>

        {/* <button className={styles.link_btn} onClick={onClick}>Создать аккаунт</button> */}
        <div>{error}</div>
      </div>
    </div>
  );
}

export default Signup;
