import React from 'react';
import classes from './headings.module.css';
import Button from '../../Button/Button';

const Headings = () => (
  <div className={classes.header}>
    <h1 className={classes.headingPrimary}>
      <span className={classes.headingPrimaryMain}>Outdoors</span>
      <span className={classes.headingPrimarySecondary}>
        is where life happens
      </span>
    </h1>
    <Button />
  </div>
);

export default Headings;
