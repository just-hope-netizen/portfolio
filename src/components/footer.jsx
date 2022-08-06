import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon } from '../assets/svg';

function Footer() {
  const footer = useRef()

  return (
    <footer className='mt-5 py-5 container ' ref={footer}>
      <div className='d-flex flex-column flex-md-row mb-4'>
        <div>
          <h6 className='footer-heading'>SAY HELLO</h6>
          <p>hopepeter007@gmail.com</p>
        </div>
        <ul className='ms-o ps-0 my-4 my-md-0 ms-md-5 ps-md-5'>
          <h6 className='footer-heading'>
            Navigate
          </h6>
          <li className='mb-2'>
            <Link
              to='/'
              onClick={() => {
                footer.scrollTo(0);
              }}
            >
              home
            </Link>
          </li>
          <li className='mb-2'>
            <Link
              to='/projects'
              onClick={() => {
                footer.scrollTo(0);
              }}
            >
              projects
            </Link>
          </li>
          <li className='mb-2'>
            <Link
              to='/about'
              onClick={() => {
                footer.scrollTo(0);
              }}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to='/tools'
              onClick={() => {
                footer.scrollTo(0);
              }}
            >
              tools
            </Link>
          </li>
        </ul>
      </div>
      <span className='divider mb-4'></span>
      <span>© Hope Peter 2022</span>

      <a href='./hope-peter.pdf' download={true} className='ms-2'>
        {' '}
        resume <DownloadIcon />
      </a>
    </footer>
  );
}

export default Footer;
