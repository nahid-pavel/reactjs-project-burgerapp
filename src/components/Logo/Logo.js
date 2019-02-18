import React from 'react';
import img from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';



const Logo = ()=>(
<div className={classes.Logo}>
 <img src={img} alt="burgerlogo" />
</div>

);

export default Logo;