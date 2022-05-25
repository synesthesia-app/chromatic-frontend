import { useState } from 'react'

export default function ImgUpload() {
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    console.log('selectedfile', selectedFile);

  return (
    <div>
            {/* <input 
                type='text' 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type='file'
                accept='image/*'
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0].name)}
            /> */}
        <input 
            type='file' 
            onChange={(e) => {
                setSelectedFile(e.target.files[0])
                console.log('selectedfile', selectedFile);
            }}
        />
        <img src={selectedFile} />
    </div>
  )
}
