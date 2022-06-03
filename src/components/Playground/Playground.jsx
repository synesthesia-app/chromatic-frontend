import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { EyeDropper } from 'react-eyedrop';
import { useColorNote } from '../../context/ColorNoteProvider';
import { useUser } from '../../context/UserProvider';
// import ImgUpload from './ImgUpload';
import hexToHSL from '../../utils/hex-to-hsl';
import hslToNote from '../../utils/hsl-to-note';
import * as Tone from 'tone';
import colorAPI from '../../services/colorAPI';
import { getImages, uploadImage } from '../../services/images';
import { CloudInstance } from '../../services/Cloudinary';

import styles from './Playground.css';

import { fill, fit } from '@cloudinary/url-gen/actions/resize';

export default function Cloud() {
  const {
    setUserColor,
    setPickedColor,
    setColorObj
  } = useColorNote();
  const {
    userObj,
    setImagesContainer,
    displayedImage,
    setDisplayedImage,
    setCurrentColorNav
  } = useUser();

  const unsigned = 'lfiwhmcn';
  const cld = CloudInstance();

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

    setCurrentColorNav(true);
  }

  // const [myImage, setMyImage] = useState(defaultImg);
  const [selectedFile, setSelectedFile] = useState('');
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`;

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: `${process.env.CLOUD_NAME}`,
      uploadPreset: `${unsigned}`,
    },
    (err, res) => {
      if (res.info.files) {
        console.log(res.info);
        let publicUrl = res.info.files[0].uploadInfo.url;
        let publicId = res.info.files[0].uploadInfo.public_id;
        handleUpload(publicUrl, publicId);
      }
    }
  );

  const handleUpload = async (publicUrl, publicId) => {
    console.log('in handleUpload');
    publicId && (await uploadImage(publicUrl, publicId, userObj.id));

    const images = await getImages(userObj.id);

    setImagesContainer(images);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const cloudWidget = widget.open();
  };

  useEffect(() => {
    !userObj.id ? <></> : handleUpload();
  }, [userObj.id]);

  let defaultImg = cld.image(displayedImage);

  useEffect(() => {
    defaultImg = cld.image(displayedImage);
  }, [displayedImage]);

  const resetImage = () => {
    setDisplayedImage('hvahpfe48bxckvfpzuxd');
  };

  defaultImg.resize(fit().width(380).height(380));
  return (
    <div>
      <div className={styles.imageButtons}>
        <div className={styles.holdsEyeDropper}>
          <EyeDropper
            buttonClasses="eye-dropper"
            onChange={getColorMakeSound}
            once={false}
          >
            Eye Dropper
          </EyeDropper>
        </div>
        {!userObj.id ? (
          <></>
        ) : (
          <div className={styles.uploadImgButton} onClick={handleClick}>
            Upload Image
          </div>
        )}
        {displayedImage === 'hvahpfe48bxckvfpzuxd' ? (
          <></>
        ) : (
          <div className={styles.uploadImgButton} onClick={resetImage}>
            Color Wheel
          </div>
        )}
      </div>
      <AdvancedImage cldImg={defaultImg} />
    </div>
  );
}
