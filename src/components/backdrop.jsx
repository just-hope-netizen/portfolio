function Backdrop(props) {
  return (
    <div
      className={props.className ? props.className : 'backdrop'}
      onClick={props.onClick}
    />
  );
}

export default Backdrop;
