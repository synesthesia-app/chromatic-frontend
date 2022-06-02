import React from 'react';
import ColorPanel from '../../components/ColorPanel/ColorPanel.jsx';
import CurrentArray from '../../components/CurrentArray/CurrentArray';
import ImageScroller from '../../components/ImageScroller/ImageScroller';
import Playground from '../../components/Playground/Playground.jsx';
import { useColorNote } from '../../context/ColorNoteProvider.jsx';
import { useEffect } from 'react';
import { getCurrentUser } from '../../services/users.js';
import styles from './Main.css';
import { useUser } from '../../context/UserProvider.jsx';

export default function Main() {
  const { userObj, setUserObj } = useUser();

  useEffect(() => {
    const fetchUserItems = async () => {
      const user = await getCurrentUser();
      setUserObj(user);
    };

    fetchUserItems();
  }, []);

  return (
    <>
      <section className={styles.main}>
        <div className={styles.interactImage}>
          <Playground />
        </div>
        <ColorPanel />
      </section>
      <section className={styles.arraySection}>
        <CurrentArray />
        <ImageScroller />
      </section>
    </>
  );
}
