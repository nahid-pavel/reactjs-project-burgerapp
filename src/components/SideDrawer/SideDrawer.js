import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import classes from './SideDrawer.module.css';
import Aux from '../../hoc/Auxillary';
import BackDrop from '../UI/BackDrop/BackDrop';



const sideDrawer = (props)=>{
    
    let attachedClasses =[classes.SideDrawer, classes.Close];
    
    if(props.open){
        
       attachedClasses =[classes.SideDrawer, classes.Open];
    }
    
    return(
        
    <Aux>
      <BackDrop show={props.open}  clicked={props.closed}/> 
     <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
              <Logo />
            </div>
            <NavigationItems />
        

      </div>
    </Aux>
    
    );
    
    
}

export default sideDrawer;