import { useEffect } from 'react';

export default function SavedPalette({ name, swatchArr }) {
  console.log('colorPalette :>> ', swatchArr);
  // useEffect(() => {
  //   const parseData = () => {
  //     const parsedPalette = JSON.parse(swatchArr);
  //     console.log('parsePalette :>> ', parsedPalette);
  //   };
  //   parseData();
  // }, []);

  return (
    <>
      test test
      {/* <div>
        {colorPalette.map((swatch, i) => {
          return (
            <div
              key={swatch.name + i}
              style={{
                backgroundColor: `hsl(${swatch.hue}, ${swatch.sat}%,${swatch.light}%)`,
              }}
              title={`${swatch.name}`}
              onClick={() => handleSwatchClick(swatch)}
            ></div>
          );
        })}
      </div> */}
    </>
  );
}
