import Nav from './nav';

function Menu(props) {
  return (
    <div
      className={`position-fixed bottom-0  end-0 menu
     ${props.className}`}
    >
      <Nav className='row g-0 ' onClick={props.close} />
    </div>
  );
}

export default Menu;
