import React from 'react';
import classes from './header.module.css';
import Logo from './Logo/Logo';
import Headings from './Headings/Headings';

const header = () => {
  return (
    <div>
      <header className={classes.header}>
        <Logo />
        <Headings />
      </header>
    </div>
  );
};

export default header;
