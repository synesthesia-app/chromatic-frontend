import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.css';

export default function Login() {
  const history = useHistory();

  async function handleClick() {
    location.replace(
      // 'http://localhost:7890/api/v1/github/login'
      'https://chromatic-backend.herokuapp.com/api/v1/github/login'
    );
    console.log('|data', data);
  }

  return (
    <div className={styles.login}>
      <button onClick={handleClick}>Login with Github</button>
    </div>
  );
}
