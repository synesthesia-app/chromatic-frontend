import { Carousel } from 'react-responsive-carousel';
import styles from './ImageCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';

export default function ImageCarousel() {
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
      <Carousel width="400px">
        {chars.map((char) => {
          return (
            <div key={char.id}>
              <img src={char.image} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
