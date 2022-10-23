import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { Logo, MoonIcon, SunIcon } from '../assets/svg';
import MobileHeader from './mobile-header';
import Nav from './nav';
import { useContext } from 'react';
import { ThemeContext } from '../helpers/context';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
                <Nav onClick={()=>{
                  window.scrollTo(0, 0)
                }}/>
              </div>
              <div className='col-2 d-flex align-items-center me-4'>
                <div>
                  <SunIcon />
                </div>
                <ReactSwitch
                  onChange={toggleTheme}
                  onColor={'#ddd'}
                  onHandleColor={'#000'}
                  uncheckedIcon={true}
                  checkedIcon={true}
                  height={15}
                  checked={theme === 'dark'}
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
          // onClick={props.switch}
          // checked={props.checked}
        />
      </header>
    </>
  );
}

export default Header;
