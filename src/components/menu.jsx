import Nav from './nav';

function Menu(props) {
  return (
    <>
      <div
        className={`position-fixed top-0 bottom-0  end-0 menu
     ${props.className}`}
      >
        <Nav className='row g-0 ' onClick={props.close} />
        <div className='row'>window</div>
      </div>
    </>
  );
}

export default Menu;
