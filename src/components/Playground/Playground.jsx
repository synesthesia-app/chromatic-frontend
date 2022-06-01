import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
// import ImgUpload from './ImgUpload';
import hexToHSL from '../../utils/hex-to-hsl';
import hslToNote from '../../utils/hsl-to-note';
import * as Tone from 'tone';
import colorAPI from '../../services/colorAPI';

import styles from './Playground.css';

import { fill } from '@cloudinary/url-gen/actions/resize';

export default function Cloud() {
  const [uploadedImg, setUploadedImg] = useState('');
  const {
    userColor,
    setUserColor,
    pickedColor,
    setPickedColor,
    colorObj,
    setColorObj,
  } = useColorNote();
  const { userObj } = useUser();

  const unsigned = 'lfiwhmcn';
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.CLOUD_NAME}`,
    },
  });

  async function getColorMakeSound({ rgb, hex }) {
    const synth = new Tone.Synth().toDestination();

    setPickedColor(hex);
    const { h, s, l } = hexToHSL(hex);
    const { note, oct } = hslToNote(h, l);

    setColorObj({
      rgb,
      hex,
      hue: `${h}`,
      sat: `${s}`,
      light: `${l}`,
      tone: note + oct,
    });

    const selectedColor = await colorAPI(hex);

    const textColor =
      selectedColor.contrast.value === '#ffffff' ? '#4cf000' : '#292929';

    setUserColor({
      rgb,
      hex,
      hue: `${h}`,
      sat: `${s}`,
      light: `${l}`,
      tone: note + oct,
      name: selectedColor.name.value,
      textColor,
    });

    synth.triggerAttackRelease(note + oct, '4n');
  }

  const defaultImg = cld.image('hvahpfe48bxckvfpzuxd');

  const [myImage, setMyImage] = useState(defaultImg);
  const [selectedFile, setSelectedFile] = useState('');
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`;
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: `${process.env.CLOUD_NAME}`,
      uploadPreset: `${unsigned}`,
    },
    (err, res) => {
      let imagePublicId = res.info?.files[0].uploadInfo.public_id;
      console.log({ imagePublicId });
      console.log({ res });
      setUploadedImg(imagePublicId);
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    const cloudWidget = widget.open();
  };

  useEffect(() => {
    const uploadImgToDb = async () => {
      console.log('uploading data');
      const res = await fetch(
        'https://chromatic-backend.herokuapp.com/api/v1/images',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({
            imageName: uploadedImg,
            userId: userObj.id,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await res.json();
      console.log(data);
    };
    uploadImgToDb();
  }, [uploadedImg]);

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
      <AdvancedImage cldImg={defaultImg} />
    </div>
  );
}
