import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { EyeDropper, useEyeDrop } from 'react-eyedrop';
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
  const {
    userObj,
    imagesContainer,
    setImagesContainer,
    displayedImage,
    setDisplayedImage,
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
    console.log('upload img');
    const images = await getImages(userObj.id);
    console.log(`|| images >`, images);
    setImagesContainer(images);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const cloudWidget = widget.open();
  };

  // useEffect(() => {
  //   const grabImage = (() => {
  //     const images = await getImages(userObj.id);

  //   })
  //   grabImage();
  // }, []);

  useEffect(() => {
    !userObj.id ? <></> : handleUpload();
  }, [userObj.id]);

  let defaultImg = cld.image(displayedImage);

  useEffect(() => {
    defaultImg = cld.image(displayedImage);
  }, [displayedImage]);

  defaultImg.resize(fill().width(380).height(380));
  return (
    <div>
      <div className={styles.imageButtons}>
        {!userObj.id ? (
          <></>
        ) : (
          <div className={styles.uploadImgButton} onClick={handleClick}>
            Upload Image
          </div>
        )}
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
