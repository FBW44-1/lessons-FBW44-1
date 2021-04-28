import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../static/logo.png';

function Navigation() {
  return (
    <div className='navigation'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt={logo}></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='selected' to='/vocals'>
              VOCALS
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to='/guitar'>
              GUITAR
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to='/bass'>
              BASS
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='selected' to='/drums'>
              DRUMS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
