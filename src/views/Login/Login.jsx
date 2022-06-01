import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.css';

export default function Login() {
  const history = useHistory();

  function handleClick() {
    location.replace(
      'https://chromatic-backend.herokuapp.com/api/v1/github/login'
      // 'http://localhost:7890/api/v1/github/login'
    );
  }

  return (
    <div className={styles.login}>
      <button onClick={handleClick}>Login with Github</button>
    </div>
  );
}
