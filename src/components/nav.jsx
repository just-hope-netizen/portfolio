import { Link, useLocation } from 'react-router-dom';

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
            to='/'
            onClick={props.onClick}
            className={`nav-item-link ${location.pathname === '/' && 'focus'}`}
          >
            {' '}
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            onClick={props.onClick}
            to='projects'
            className={`nav-item-link ${
              location.pathname === '/projects' && 'focus'
            }`}
          >
            Projects
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            onClick={props.onClick}
            to='admin'
            className={`nav-item-link ${
              location.pathname === '/admin' && 'focus'
            }`}
          >
            Private
          </Link>
        </li>
      </ul>
      {/* <Outlet /> */}
    </nav>
  );
}

export default Nav;
