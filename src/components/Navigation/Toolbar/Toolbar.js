import React from 'react';
import classes from'./Toolbar.module.css';
import Navigation from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar=(props)=>{
    
    return(
        
    <header  className={classes.Toolbar}>
       
        
           <DrawerToggle  clicked ={props.drawerToggle}/>
           <div className={classes.Logo}>
             <Logo />
           </div>
           <nav className={classes.DesktopOnly}>
              <Navigation />
           </nav>
      
        
    </header>
    
    )
    
    
}

export default toolbar;