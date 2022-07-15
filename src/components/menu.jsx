import ReactSwitch from 'react-switch';
import Nav from './nav';

function Menu(props) {
  return (
    <div
      className={`position-fixed top-0 bottom-0  end-0 menu
     ${props.className}`}
    >
      <Nav className='row g-0 ' onClick={props.close} />
      <div className='switch-container mobile'>
        <ReactSwitch
          onChange={props.onClick}
          onColor={'#ddd'}
          onHandleColor={'#000'}
          uncheckedIcon={true}
          checkedIcon={true}
          checked={props.checked}
        />
      </div>
    </div>
  );
}

export default Menu;
