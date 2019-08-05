import React from 'react';
import classes from './logo.module.css';
import logo from '../../../img/logo-white.png';

const Logo = () => (
  <div className={classes.logoBox}>
    <img className={classes.logoImg} src={logo} alt='logo' />
  </div>
);

export default Logo;
