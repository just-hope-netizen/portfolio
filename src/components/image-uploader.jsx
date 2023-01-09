const ImageUploader = (props) => {
  return (
    <div className={`'mt-2`}>
      <label className={props.className}>{props.placeholder}</label>

      <div>
        <input
          type='file'
          className='p-2'
          onChange={(e) => props.state(e.target.files[0])}
        ></input>
      </div>
    </div>
  );
};
export default ImageUploader;
