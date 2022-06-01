import styles from './CurrentArray.css';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useState } from 'react';
import * as Tone from 'tone';

export default function CurrentArray() {
  const { colorPalette, setColorObj } = useColorNote();
  const [name, setName] = useState('');
  const [tone, setTone] = useState('');

  function handleSwatchClick(swatch) {
    setName(swatch.name);
    setTone(swatch.tone);
    const synth3 = new Tone.Synth().toDestination();
    synth3.triggerAttackRelease(swatch.tone, '4n');
  }

  return (
    <>
      <section className={styles.arraySection}>
        <input
          className={styles.arrayInput}
          type="text"
          placeholder="name your array"
        />
        <div className={styles.displayArray}>
          <div className={styles.showArray}>
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
          <div className={styles.saveArray}>save array</div>
        </section>
      </section>
    </>
  );
}
