import { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import { fill } from '@cloudinary/url-gen/actions/resize';

export default function Cloud() {
  const unsigned = 'lfiwhmcn';

  const cld = new Cloudinary({
    cloud: {
      cloudName: `${process.env.CLOUD_NAME}`,
    },
  });
  const defaultImg = cld.image('gucjxiz3r3qjkvmaq2br');
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

  return (
    <div>
      <img src={myImage} />
      <button onClick={handleClick}>Upload Image</button>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}
