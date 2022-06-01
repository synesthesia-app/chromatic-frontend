import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Splider() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    const getDummyData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');

      const data = await res.json();
      setChars(data.results);
    };
    getDummyData();
  }, []);

  return (
    <div>
      <Splide width="200px">
        {chars.map((char) => {
          return (
            <SplideSlide key={char.id}>
              <div key={char.id}>
                <img src={char.image} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
