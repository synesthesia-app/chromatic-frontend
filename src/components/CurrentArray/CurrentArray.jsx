import styles from './CurrentArray.css';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
import { useState } from 'react';
import * as Tone from 'tone';
import { createPalette } from '../../services/palettes';

export default function CurrentArray() {
  const { colorPalette, setColorObj } = useColorNote();
  const { userObj } = useUser();
  const [name, setName] = useState('');
  const [tone, setTone] = useState('');
  const [paletteName, setPaletteName] = useState('');

  function handleSwatchClick(swatch) {
    setName(swatch.name);
    setTone(swatch.tone);
    const synth3 = new Tone.Synth().toDestination();
    synth3.triggerAttackRelease(swatch.tone, '4n');
  }

  async function handleSavePalette() {
    const palette = {
      userId: userObj.id,
      name: paletteName,
      swatchArr: JSON.stringify(colorPalette),
    };

    console.log('colorPalette', colorPalette);
    console.log('palette', palette);

    await createPalette(palette);
  }

  return (
    <>
      <section className={styles.arraySection}>
        <input
          className={styles.arrayInput}
          type="text"
          placeholder="name your palette"
          value={paletteName}
          required
          onChange={(e) => setPaletteName(e.target.value)}
        />
        <div className={styles.displayArray}>
          <div className={styles.arrayContainer}>
            {colorPalette.map((swatch, i) => {
              return (
                <div
                  key={swatch.name + i}
                  className={styles.swatch}
                  style={{
                    backgroundColor: `hsl(${swatch.hue}, ${swatch.sat}%,${swatch.light}%)`,
                  }}
                  title={`${swatch.name}`}
                  onClick={() => handleSwatchClick(swatch)}
                ></div>
              );
            })}
          </div>
        </div>
        <section className={styles.nameAndButton}>
          <div>
            {name && (
              <h3>
                {name} - {tone}
              </h3>
            )}
          </div>
          <div className={styles.saveArray} onClick={handleSavePalette}>
            save palette
          </div>
        </section>
      </section>
    </>
  );
}
