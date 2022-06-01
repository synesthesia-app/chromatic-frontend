import React from 'react';
import ColorPanel from '../../components/ColorPanel/ColorPanel.jsx';
import CurrentArray from '../../components/CurrentArray/CurrentArray';
import ImageScroller from '../../components/ImageScroller/ImageScroller';
// import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import '@splidejs/react-splide/css';
import Playground from '../../components/Playground/Playground.jsx';
import styles from './Main.css';

export default function Main() {
  // const { userColor, setUserColor, currentColor, setCurrentColor } = useColorNote();

  // const [colors, pickColor, cancelPickColor] = useEyeDrop({
  //   once: false,
  //   pickRadius: 10,
  //   cursorActive: 'crosshair',
  //   cursorInactive: 'default',
  // });

  return (
    <>
      {/* <section className={styles.main}>
        <div className={styles.interactImage}>
          <Playground />
        </div>
        <ColorPanel />
      </section>
      <CurrentArray /> */}
      <ImageScroller />
    </>
  );
}
