import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { Logo, MoonIcon, SunIcon } from '../assets/svg';
import MobileHeader from './mobile-header';
import Nav from './nav';

function Header(props) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the header
        setShow(false);
      } else {
        // if scroll up show the header
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`px-3 position-fixed container-fluid top-0 start-0 end-0 ${
          show ? null : 'hidden'
        }`}
        id='top-bar'
      >
        <div className='row py-3 pc-header  '>
          <Link to='/' className='col-3 logo-container'>
            <Logo />
          </Link>

          <div className='col-9 d-flex align-items-center justify-content-end'>
            <div className='row d-flex justify-content-between '>
              <div className='col-2 d-flex align-items-center '>
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
              <div className='col-8'>
                <Nav />
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
