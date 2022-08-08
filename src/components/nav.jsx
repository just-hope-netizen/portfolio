import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Nav(props) {
  const location = useLocation();
const navRef = useRef()
  return (
    <nav
      ref={navRef}
      className={
        props.className
          ? props.className
          : 'd-flex align-items-center justify-content-end '
      }
    >
      <ul className={` d-flex  ${props.className && 'flex-column '}`}>
        <li className='nav-item'>
          <Link
            onClick={() => {
              props.onClick();
              navRef.scrollTo(0);
            }}
            to='/'
            className={`nav-item-link ${location.pathname === '/' && 'focus'}`}
          >
            {' '}
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            onClick={() => {
              props.onClick();
              navRef.scrollTo(0);
            }}
            to='/projects'
            className={`nav-item-link ${
              location.pathname === '/projects' && 'focus'
            }`}
          >
            projects
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Nav;
