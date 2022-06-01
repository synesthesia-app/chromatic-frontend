import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';
import { useEffect } from 'react';

import styles from './AuthButton.css';

export default function AuthButton() {
    const { userObj, logout } = useUser();
    const history = useHistory();
  
    useEffect(() => {
      console.log(`|| userObj >`, userObj);
    }, [userObj]);
  
    const handleLogout = async () => {
      await logout();
      history.push('/');
    };

  return (
    <div>
        {userObj?.username ? (
            <Link className={styles.navLink} onClick={handleLogout}>
                Logout
            </Link>
        ) : (
            <Link className={styles.navLink}>
                Login
            </Link>
        )}
    </div>
  )
}

