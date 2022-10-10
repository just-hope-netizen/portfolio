import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowIcon, DownloadIcon } from '../assets/svg';

function Footer() {
  const footer = useRef();
  const location = useLocation();

  return (
    <footer className='mt-5 py-5 container ' ref={footer}>
      <div className='d-flex flex-column flex-md-row mb-4'>
        <div>
          <h6 className='footer-heading'>SAY HELLO</h6>
          <p>hopepeter007@gmail.com</p>
        </div>
        <ul className='ms-o ps-0 my-4 my-md-0 ms-md-5 ps-md-5'>
          <h6 className='footer-heading'>Navigate</h6>
          <li className='mb-2'>
            <Link
              to='/'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              home
              <ArrowIcon
                className={`arrow-icon ${
                  location.pathname === '/' && 'hidden'
                }`}
              />
            </Link>
          </li>
          <li className='mb-2'>
            <Link
              to='/projects'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              projects
              <ArrowIcon
                className={`arrow-icon ${
                  location.pathname === '/projects' && 'hidden'
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <span className='divider mb-4'></span>
      <span>© Hope Peter 2022</span>

      <a
        href='https://drive.google.com/file/d/1Ia6xjZFEXn7RGoJhV27rHqFc1_272EKZ/view?usp=sharing'
        rel='noopener noreferrer'
        className='ms-2'
      >
        {' '}
        Resumé <DownloadIcon />{' '}
      </a>
    </footer>
  );
}

export default Footer;
