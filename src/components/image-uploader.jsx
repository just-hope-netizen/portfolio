import React, { useState } from 'react';

const ImageUploader = (props) => {
  const [image, setImage] = useState('');

  const getImage = () => {
    const data = new FormData();
    console.log(image);
    data.append('file', image);
    data.append('upload_preset', 'portfolio');
    data.append('cloud_name', 'dz14l6crq');
    console.log(data);
    props.parentFunc(data);
  };

  return (
    <div className='mt-2'>
      <label className={props.className}>{props.placeholder}</label>
      <div>
        <input
          type='file'
          className='p-2'
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={getImage} className='btn btn-primary mt-3'>
          Upload
        </button>
      </div>
    </div>
  );
};
export default ImageUploader;
