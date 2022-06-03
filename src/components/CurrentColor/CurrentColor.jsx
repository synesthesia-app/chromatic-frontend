import { useEffect, useState } from 'react';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
import { createPalette } from '../../services/palettes';
import styles from './CurrentColor.css';

export default function CurrentColor() {
  const { userColor, colorPalette, setColorPalette, pickedColor, colorObj } =
    useColorNote();

  const { userObj, setCurrentColorNav } = useUser();
  const [makeHSLItem, setMakeHSLItem] = useState();
  const [hex, setHex] = useState('bada55');
  const [rgb, setRgb] = useState('186, 218, 85');
  const [swatchName, setSwatchName] = useState('');

  useEffect(() => {
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
    const stringManip = rgb;
    const newString1 = stringManip.replace('rgb(', '');
    const newString2 = newString1.replace(')', '');
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
    e.target.style.color = `#292929`;
  }

  function handleMouseUp(e) {
    e.preventDefault();
    e.target.style.background = `#292929`;
    e.target.style.color =
      userColor.textColor === '#4cf000' ? '#4cf000' : `${pickedColor}`;
  }

  function handleSavePalette() {
    setColorPalette([...colorPalette, userColor]);
  }

  async function handleSaveSwatch() {
    const singleSwatch = {
      userId: userObj.id,
      name: swatchName ? swatchName : userColor.name,
      swatchArr: JSON.stringify([userColor]),
    };

    await createPalette(singleSwatch);
    setCurrentColorNav(false);
  }

  return (
    <>
      {userColor.name ? (
        <div
          className={styles.displayCurrentColor}
          style={{
            backgroundColor: `${colorObj.hex}`,
            color: `${userColor?.textColor}`,
          }}
        >
          <div>
            <div
              className={styles.colorName}
              style={{ borderBottom: `1px solid ${userColor.textColor}` }}
            >
              <h1>{swatchName ? swatchName : userColor.name}</h1>
              <input
                type="text"
                placeholder="Rename swatch"
                value={swatchName}
                onChange={(e) => setSwatchName(e.target.value)}
              />
            </div>
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
            {!userObj.id ? (
              <></>
            ) : (
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
                onClick={handleSaveSwatch}
              >
                save swatch
              </div>
            )}
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
              onClick={handleSavePalette}
            >
              add to list
            </div>
          </div>
        </div>
      ) : (
        <h2 className={styles.clickAColor}>
          Click a color with the eye dropper for more info
        </h2>
      )}
    </>
  );
}
