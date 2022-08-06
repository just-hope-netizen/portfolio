import { Link, Outlet, useLocation } from 'react-router-dom';

function Nav(props) {
  const location = useLocation();

  return (
    <nav
      className={
        props.className
          ? props.className
          : 'd-flex align-items-center justify-content-end '
      }
    >
      <ul className={` d-flex  ${props.className && 'flex-column '}`}>
        <li className='nav-item'>
          <Link
            onClick={props.onClick}
            to='/'
            className={`nav-item-link ${location.pathname === '/' && 'focus'}`}
          >
            {' '}
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            onClick={props.onClick}
            to='/projects'
            className={`nav-item-link ${
              location.pathname === '/projects' && 'focus'
            }`}
          >
            projects
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            onClick={props.onClick}
            to='/about'
            className={`nav-item-link ${
              location.pathname === '/about' && 'focus'
            }`}
          >
            about
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            onClick={props.onClick}
            to='/tools'
            className={`nav-item-link ${
              location.pathname === '/tools' && 'focus'
            }`}
          >
            tools
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Nav;
