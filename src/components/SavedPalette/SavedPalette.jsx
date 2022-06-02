import { useEffect, useState } from 'react';
import styles from './SavedPalette.css';

export default function SavedPalette({ name, swatchArr }) {
  const [palette, setPalette] = useState([]);
  useEffect(() => {
    const parseData = () => {
      const parsedPalette = JSON.parse(swatchArr);
      setPalette(parsedPalette);
    };
    parseData();
  }, []);

  return (
    <>
      <section className={styles.paletteContainer}>
        <p>{name}</p>
        <div className={styles.swatchContainer}>
          {palette.map((swatch, i) => {
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
      </section>
    </>
  );
}
