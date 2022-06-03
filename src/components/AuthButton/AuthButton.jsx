import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

import styles from '../Header/Header.css';

export default function AuthButton() {
  const { userObj, logout } = useUser();

  useEffect(() => {
    console.log(`|| userObj >`, userObj);
  }, [userObj]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={styles.routes}>
      {userObj?.username ? (
        <Link to="*" className={styles.navLink} onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <Link to="/login" className={styles.navLink}>
          Login
        </Link>
      )}
    </div>
  );
}
