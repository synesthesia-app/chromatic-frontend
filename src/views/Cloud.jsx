import { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import styles from './Cloud.css';

import { fill } from '@cloudinary/url-gen/actions/resize';

function getColorMakeSound({ rgb, hex }) {
  const synth = new Tone.Synth().toDestination();
  setPickedColor(hex);
  const { h, s, l } = hexToHSL(hex);
  const { oct, note } = hslToNote(h, l);
  setUserColor((prev) => {
    return [
      ...prev,
      { hsl: `${h}`, sat: `${s}`, light: `${l}`, tone: note + oct },
    ];
  });
  synth.triggerAttackRelease(note + oct, '4n');
}

export default function Cloud() {
  const unsigned = 'lfiwhmcn';

  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.CLOUD_NAME}`,
    },
  });
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

  defaultImg.resize(fill().width(250).height(250));

  return (
    <div>
      <div className={styles.imageButtons}>
        <button onClick={handleClick}>Upload Image</button>
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
