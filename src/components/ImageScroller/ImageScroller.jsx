import styles from './ImageScroller.css';
import { useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { useUser } from '../../context/UserProvider';
import { CloudInstance } from '../../services/Cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';

export default function ImageScroller() {
  const { imagesContainer } = useUser();
  const [cloudArr, setCloudArr] = useState([]);

  const cld = CloudInstance();

  // const loopImages = () => {
  //   const container = imagesContainer.map((img) => {
  //     let grabbedImg = cld.image(img);
  //     return grabbedImg.resize(fill().width(80).height(80));
  //   });
  //   setCloudArr(container);
  // };

  // useEffect(() => {
  //   loopImages();
  // }, [imagesContainer]);

  useEffect(() => {
    console.log(`|| imagesContainer >`, imagesContainer);
  }, [imagesContainer]);

  return (
    <>
      <section className={styles.imageScroller}>
        <div className={styles.showImages}>
          {imagesContainer.map((image) => {
            console.log(`|| image >`, image);
            return (
              <img
                key={image}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                src={image}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
