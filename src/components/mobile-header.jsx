import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseMenuIcon, Logo, MenuIcon } from '../assets/svg';
import Backdrop from './backdrop';
import Menu from './menu';
import { useContext } from 'react';
import { MoonIcon, SunIcon } from '../assets/svg';
import { ThemeContext } from '../helpers/context';

function MobileHeader(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState(false);

  function closeMenu() {
    setMenu(false);
    window.scrollTo(0, 0);
  }

  return (
    <div className={props.className}>
      <Link to='/' className='col-3 logo-container'>
        <Logo />
      </Link>
      <div className='menu-btn'>
        {theme === 'light' ? (
          <MoonIcon
            onClick={() => {
              toggleTheme();
            }}
          />
        ) : (
          <SunIcon
            onClick={() => {
              toggleTheme();
            }}
          />
        )}
        <button
          className='ms-2'
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
      </div>
      <Menu close={closeMenu} className={menu && 'menu slide'} />
      <Backdrop onClick={closeMenu} className={menu && 'backdrop slide'} />
    </div>
  );
}

export default MobileHeader;
