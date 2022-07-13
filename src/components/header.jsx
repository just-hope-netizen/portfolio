import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation()
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
    <header className={`px-3 position-fixed top-0 start-0 end-0 ${show ? null : 'hidden'}`} id='top-bar'>
      <nav className='d-flex row align-items-center py-3'>
        <Link to='/' className='col'>
          image
        </Link>
        <ul className='nav-list col d-flex justify-content-end align-items-center'>
          <li className='nav-item'>
            <Link to='/' className={`nav-item-link ${location.pathname === '/' && 'focus'}`}>
              {' '}
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className={`nav-item-link ${location.pathname === '/projects' && 'focus'}`}>
              projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className={`nav-item-link ${location.pathname === '/about' && 'focus'}`}>
              about
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/tools' className={`nav-item-link${location.pathname === '/tools' && 'focus'}`}>
              tools
            </Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </header>
  );
}

export default Header;
