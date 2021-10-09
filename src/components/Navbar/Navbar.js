import * as React from 'react';
import { Link } from 'react-router-dom';
import 
{
  navbarContainer,
  logoStyle,
  navButtons,
  navButton
} from './Navbar.module.css'

import logo from '../../images/logo.svg'

const Navbar=()=> {
  return (
    <div className={navbarContainer}>
          <img className={logoStyle} src={logo} alt="GeekBot" />
          <div className={navButtons}>
            <Link className={navButton} to = '/'>Home</Link>
            <Link className={navButton} to = '#About'>About</Link>
          </div>
    </div>
  );
}

export default Navbar;