import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileHeader from './mobile-header';
import Nav from './nav';

function Header() {
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
        <div className='row py-3 pc-header'>
          <div className='col-6'>
            <div className='row'>
              <Link to='/' className='col-3'>
                image
              </Link>
              <div className='col-3'>window</div>
            </div>
          </div>
          <Nav />
        </div>
      </header>
      <MobileHeader className={`menu-container container-fluid ${show ? null : 'hidden'}`} />
    </>
  );
}

export default Header;
