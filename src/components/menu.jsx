import ReactSwitch from 'react-switch';
import { MoonIcon, SunIcon } from '../assets/svg';
import Nav from './nav';

function Menu(props) {

  return (
    <div
      className={`position-fixed bottom-0  end-0 menu
     ${props.className}`}
    >
      <Nav className='row g-0 ' onClick={props.close} />
      <div className='switch-container mobile d-flex align-items-center '>
        <div>
          <SunIcon />
        </div>
        <ReactSwitch
          onChange={props.onClick}
          onColor={'#ddd'}
          onHandleColor={'#000'}
          uncheckedIcon={true}
          checkedIcon={true}
          height={15}
          checked={props.checked}
          className='mx-2'
        />
        <div>
          <MoonIcon />
        </div>
      </div>
    </div>
  );
}

export default Menu;
