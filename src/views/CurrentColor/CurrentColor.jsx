import { useEffect, useState } from 'react';
import { useTone } from '../../context/ToneProvider';
import styles from './CurrentColor.css';

export default function CurrentColor() {
  const { userColor, setUserColor, pickedColor, setPickedColor, colorObj } =
    useTone();
  const [makeHSLItem, setMakeHSLItem] = useState();
  const [hex, setHex] = useState('bada55');
  const [rgb, setRgb] = useState('186, 218, 85');

  useEffect(() => {
    console.log(`|| colorObj >`, colorObj);
    setHex(new String(colorObj.hex));
    setRgb(new String(colorObj.rgb));
    setMakeHSLItem(
      `${colorObj.hsl || 74}°, ${colorObj.sat || 64}, ${colorObj.light || 59}`
    );
  }, [colorObj]);

  useEffect(() => {
    setHex(hex.replace('#', ''));
  }, [hex]);

  useEffect(() => {
    console.log(`|| rgb >`, rgb.charAt(0));
    const stringManip = rgb;
    const newString1 = stringManip.replace('rgb(', '');
    const newString2 = newString1.replace(')', '');

    console.log(`|| newString2 >`, newString2);

    setRgb(newString2);
  }, [rgb]);

  function textColor(e) {
    if (userColor.textColor === undefined) return `${pickedColor}`;
    return userColor.textColor === '#4cf000' ? '#4cf000' : `${pickedColor}`;
  }

  function handleMouseEnter(e) {
    e.preventDefault();
    e.target.style.background = '#292929';
    e.target.style.color = textColor(e);
    console.log(`|| userColor.textColor >`, userColor.textColor);
  }

  function handleMouseLeave(e) {
    e.preventDefault();
    e.target.style.background = `${pickedColor}`;
    if (userColor.textColor === '#4cf000') {
      return (e.target.style.color = '#4cf000');
    } else {
      return (e.target.style.color = '#292929');
    }
  }

  function handleMouseDown(e) {
    e.preventDefault();
    e.target.style.background = '#f0b';
    e.target.style.color = `${userColor?.textColor}`;
  }

  function handleMouseUp(e) {
    e.preventDefault();
    e.target.style.background = '#292929';
    e.target.style.color = `${userColor?.textColor}`;
  }

  console.log(`|| colorObj >`, colorObj);

  return (
    <>
      <div
        className={styles.displayCurrentColor}
        style={{
          backgroundColor: `${pickedColor}`,
          color: `${userColor?.textColor}`,
        }}
      >
        <div>
          <h1 className={styles.colorName}>{userColor.name || 'Conifer'}</h1>
          <div
            className={styles.colorValues}
            style={{
              color: `${userColor?.textColor}`,
            }}
          >
            <div>
              <p>HEX</p>
              <p>{hex || 'xxxxxx'}</p>
            </div>
            <div>
              <p>RGB</p>
              <p>{rgb || '0, 0, 0'}</p>
            </div>
            <div>
              <p>HSL</p>
              <p>{makeHSLItem}</p>
            </div>
          </div>
          <p
            className={styles.musicalNote}
            style={{
              color: `${userColor?.textColor}`,
            }}
          >
            Musical Note: {colorObj.tone || '𝄞 𝄆'}
          </p>
        </div>
        <div className={styles.colorButtons}>
          <div
            className={`${styles.buttonStyle} ${styles.saveColor}`}
            style={{
              backgroundColor: `${pickedColor}`,
              border: `2px solid ${userColor?.textColor}`,
              color: `${userColor?.textColor}`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            save swatch
          </div>
          <div
            className={`${styles.buttonStyle} ${styles.addToList}`}
            style={{
              backgroundColor: `${pickedColor}`,
              border: `2px solid ${userColor?.textColor}`,
              color: `${userColor?.textColor}`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            add to list
          </div>
        </div>
      </div>
    </>
  );
}
