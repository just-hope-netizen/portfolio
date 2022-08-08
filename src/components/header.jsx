import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { Logo, MoonIcon, SunIcon } from '../assets/svg';
import MobileHeader from './mobile-header';
import Nav from './nav';

function Header(props) {
 

  return (
    <>
      <header
        className={` position-fixed container-fluid top-0 start-0 end-0 `}
        id='top-bar'
      >
        <div className='row py-3 pc-header px-3  '>
          <Link to='/' className='col-3 logo-container'>
            <Logo />
          </Link>

          <div className='col-9 d-flex align-items-center justify-content-end'>
            <div className='row d-flex align-items-center justify-content-end '>
              <div className='col-7'>
                <Nav />
              </div>
              <div className='col-2 d-flex align-items-center me-4'>
                <div>
                  <SunIcon />
                </div>
                <ReactSwitch
                  onChange={props.switch}
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
          </div>
        </div>
        <MobileHeader
          className={`menu-container `}
          onClick={props.switch}
          checked={props.checked}
        />
      </header>
    </>
  );
}

export default Header;
