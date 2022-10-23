function Input(props) {
  return (
    <div className=' mt-2'>
      <label className='input-label'>{props.label}</label>
      <div>
        <input
          type={props.type}
          name={props.name}
          className='p-2'
          placeholder={props.placeholder}
          ref={props.refer}
          required={true}
          defaultValue={props.value}
        />
      </div>
    </div>
  );
}

export default Input;