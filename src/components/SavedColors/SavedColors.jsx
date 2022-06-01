import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserProvider';
import styles from './SavedColors.css';

export default function SavedColors() {
  const { userObj } = useUser();
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    getPalettesByUserId(userObj.id).then(setPalettes).then(console.log);
  }, []);

  return (
    <>
      <div className={styles.savedColors}></div>
    </>
  );
}
