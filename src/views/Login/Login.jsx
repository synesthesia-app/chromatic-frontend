import styles from './Login.css';

export default function Login() {
  function handleClick() {
    location.replace(
      // 'https://chromatic-backend.herokuapp.com/api/v1/github/login'
      // For local backend:
      'http://localhost:7890/api/v1/github/login'
    );
  }

  return (
    <div className={styles.login}>
      <button className={styles.loginButton} onClick={handleClick}>
        Login with GitHub
      </button>
    </div>
  );
}
