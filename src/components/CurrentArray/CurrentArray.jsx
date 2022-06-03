import styles from './CurrentArray.css';
import styles2 from '../../index.css';
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

  function handlePlayPalette() {
    const synth = new Tone.PolySynth().toDestination();
    const tones = colorPalette.map((swatch) => swatch.tone);
    synth.triggerAttackRelease(tones, 1);
  }

  return (
    <>
      <section className={styles.arraySection}>
        <form id="colorArray" action="" onSubmit={handleSavePalette}>
          <input
            className={styles.arrayInput}
            type="text"
            placeholder="name your palette"
            value={paletteName}
            required
            onChange={(e) => setPaletteName(e.target.value)}
          />
          <div className={styles.displayArray}>
            <div className={`${styles.arrayContainer} ${styles2.scrollbar}`}>
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
          </section>
        </form>
        <div className={styles.itMovesTheButtonsToTheRight}>
          <div className={styles.playPalette}>
            {!userObj.id ? (
              <></>
            ) : (
              <button
                className={styles.saveArray}
                type="submit"
                form="colorArray"
              >
                save palette
              </button>
            )}
            <button className={styles.resetArray} onClick={handleResetPalette}>
              reset palette
            </button>
            <button className={styles.playArray} onClick={handlePlayPalette}>
              play palette
            </button>
            <button className={styles.playSequence}>play sequence</button>
          </div>
        </div>
      </section>
    </>
  );
}
