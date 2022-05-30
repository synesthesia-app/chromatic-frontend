import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useTone } from '../context/ToneProvider';
import ImgUpload from '../views/ImgUpload';
import hexToHSL from '../utils/hex-to-hsl';
import hslToNote from '../utils/hsl-to-note';
import * as Tone from 'tone';

import styles from './Cloud.css';

import { fill } from '@cloudinary/url-gen/actions/resize';

export default function Cloud() {
  const {
    userColor,
    setUserColor,
    pickedColor,
    setPickedColor,
    colorObj,
    setColorObj,
  } = useTone();

  const unsigned = 'lfiwhmcn';
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.CLOUD_NAME}`,
    },
  });

  function getColorMakeSound({ rgb, hex }) {
    const synth = new Tone.Synth().toDestination();

    setPickedColor(hex);
    const { h, s, l } = hexToHSL(hex);
    const { oct, note } = hslToNote(h, l);
    setColorObj({
      rgb,
      hex,
      hsl: `${h}`,
      sat: `${s}`,
      light: `${l}`,
      tone: note + oct,
    });
    setUserColor((prev) => {
      return [
        ...prev,
        { hsl: `${h}`, sat: `${s}`, light: `${l}`, tone: note + oct },
      ];
    });
    synth.triggerAttackRelease(note + oct, '4n');
  }

  useEffect(() => {
    console.log(`|| colorObj >`, colorObj.hsl);
  }, [colorObj]);

  const defaultImg = cld.image('hvahpfe48bxckvfpzuxd');
  const [myImage, setMyImage] = useState(defaultImg);
  const [selectedFile, setSelectedFile] = useState('');
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`;
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: `${process.env.CLOUD_NAME}`,
      uploadPreset: `${unsigned}`,
    },
    (err, res) => {}
  );

  const handleClick = (e) => {
    e.preventDefault();
    widget.open();
  };

  defaultImg.resize(fill().width(380).height(380));

  return (
    <div>
      <div className={styles.imageButtons}>
        <div className={styles.uploadImgButton} onClick={handleClick}>
          Upload Image
        </div>
        <div className={styles.holdsEyeDropper}>
          <EyeDropper
            buttonClasses="eye-dropper"
            onChange={getColorMakeSound}
            once={false}
          >
            Eye Dropper
          </EyeDropper>
        </div>
      </div>
      {/* <img src={myImage} /> */}
      <AdvancedImage cldImg={defaultImg} />
    </div>
  );
}
