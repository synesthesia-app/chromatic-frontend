import { useEffect, useState } from 'react';
import { useTone } from '../../context/ToneProvider';
import styles from './CurrentColor.css';

export default function CurrentColor() {
  const { userColor, setUserColor, pickedColor, setPickedColor, colorObj } =
    useTone();
  const [makeHSLItem, setMakeHSLItem] = useState();
  const [hex, setHex] = useState('000000');
  const [rgb, setRgb] = useState('0, 0, 0');

  useEffect(() => {
    console.log(`|| colorObj >`, colorObj);
    setHex(new String(colorObj.hex));
    setRgb(new String(colorObj.rgb));
    setMakeHSLItem(
      `${colorObj.hsl || 0}°, ${colorObj.sat || 0}, ${colorObj.light || 0}`
    );
  }, [colorObj]);

  useEffect(() => {
    setHex(hex.replace('#', ''));
  }, [hex]);

  useEffect(() => {
    console.log(`|| rgb >`, rgb.charAt(0));
    let stringManip = rgb;
    const newString1 = stringManip.replace('rgb(', '');
    const newString2 = newString1.replace(')', '');

    console.log(`|| newString2 >`, newString2);

    setRgb(newString2);
  }, [rgb]);

  // {
  //     "rgb": "rgb(0, 0, 255)",
  //     "hex": "#0000ff",
  //     "hsl": "240",
  //     "sat": "100",
  //     "light": "50",
  //     "tone": "G#4"
  // }

  // let rgb = colorObj.rgb.replace('rgb(', '');
  // rgb = rgb.replace(')', '');
  // console.log(`|| rgb >`, rgb);

  return (
    <>
      <div
        className={styles.displayCurrentColor}
        style={{
          backgroundColor: `${pickedColor}`,
        }}
      >
        BIG FREAKING LONG COLOR NAME
      </div>
      <div className={styles.colorValues}>
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
      <p className={styles.musicalNote}>
        Musical Note: {colorObj.tone || '𝄞 𝄆'}
      </p>
    </>
  );
}
