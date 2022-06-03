import styles from './CurrentArray.css';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
import { useState } from 'react';
import * as Tone from 'tone';
import { createPalette } from '../../services/palettes';

export default function CurrentArray() {
  const {
    colorPalette,
    setPaletteName,
    paletteName,
    setColorObj,
    setColorPalette,
  } = useColorNote();
  console.log('colorPalette :>> ', colorPalette);
  const { userObj, setCurrentColorNav } = useUser();
  console.log('paletteName :>> ', paletteName);
  const [name, setName] = useState('');
  const [tone, setTone] = useState('');

  function handleSwatchClick(swatch) {
    setName(swatch.name);
    setTone(swatch.tone);
    const synth3 = new Tone.Synth().toDestination();
    synth3.triggerAttackRelease(swatch.tone, '4n');
  }

  function handleResetPalette() {
    setColorPalette([]);
    setPaletteName('');
  }

  async function handleSavePalette(e) {
    e.preventDefault();
    const palette = {
      userId: userObj.id,
      name: paletteName,
      swatchArr: JSON.stringify(colorPalette),
    };

    await createPalette(palette);

    handleResetPalette();

    setCurrentColorNav(false);
  }

  return (
    <>
      <section className={styles.arraySection}>
        <form action="" onSubmit={handleSavePalette}>
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
            <div className={styles.arrayButtons}>
              <div className={styles.playPalette}>
                <button className={styles.playArray}>play palette</button>
                <button className={styles.playSequence}>play sequence</button>
              </div>
              <div className={styles.resetAndSave}>
                <button
                  className={styles.resetArray}
                  onClick={handleResetPalette}
                >
                  reset palette
                </button>
                {!userObj.id ? (
                  <></>
                ) : (
                  <button className={styles.saveArray} type="submit">
                    save palette
                  </button>
                )}
              </div>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}
