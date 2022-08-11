import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseMenuIcon, Logo, MenuIcon } from '../assets/svg';
import Backdrop from './backdrop';
import Menu from './menu';

function MobileHeader(props) {
  const [menu, setMenu] = useState(false);

  function closeMenu() {
    setMenu(false);
                window.scrollTo(0, 0);

    
  }
  return (
    <div className={props.className} >
      <Link to='/' className='col-3 logo-container'>
        <Logo />
      </Link>

      <button
        className='menu-btn'
        onClick={() => {
          setMenu(!menu);
        }}
      >
        {menu ? <CloseMenuIcon /> : <MenuIcon />}
      </button>
      <Menu
        close={closeMenu}
        className={menu && 'menu slide'}
        onClick={props.onClick}
        checked={props.checked}
      />
      <Backdrop onClick={closeMenu} className={menu && 'backdrop slide'} />
    </div>
  );
}

export default MobileHeader;
