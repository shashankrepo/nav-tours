import React from 'react';
import classes from './button.module.css';
import { Link } from 'react-router-dom';

const Button = () => {
  const btnClasses = [classes.btn, classes.btnWhite];
  return (
    <Link to='/test' className={btnClasses.join(' ')}>
      Discover our Tours
    </Link>
  );
};

export default Button;
