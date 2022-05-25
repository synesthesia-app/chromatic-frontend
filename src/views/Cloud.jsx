import { useState } from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import { fill } from '@cloudinary/url-gen/actions/resize'

export default function Cloud() {
    const cld = new Cloudinary({
        cloud: {
          cloudName: `${process.env.CLOUD_NAME}`
        }
      });
      const defaultImg = cld.image('docs/models');
      const [myImage, setMyImage] = useState(defaultImg);
      const [selectedFile, setSelectedFile] = useState('');
      const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`

      const handleSubmit = (e) => {
        e.preventDefault();
        // const {selectedFile} = submitForm();
        const formData = new FormData();
        formData.append('name', name);
        formData.append("file", selectedFile);
        formData.append("upload_preset", "lfiwhmcn");

      console.log('|selectedFile', formData);

        fetch(url, {
          method: "POST",
          headers: {
            body: formData, 
            upload_preset: 'lfiwhmcn'
          }
        })
          .then((response) => {
            console.log('response', response.text());
          })

      }
      
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" id="upload-background-image" name="upload-background-image" required />
          <button>SUBMIT</button>
        </form>
        <img src={myImage} />
        <AdvancedImage cldImg={myImage} />
    </div>
  )
}
