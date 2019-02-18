import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component{
     state ={
        
         showSideDrawer: false
         
     }

     sideDrawerHandler=()=>{
         
         
         this.setState({showSideDrawer:false});
     }
     
    drawerToggleHandler=(prevState)=>{
         
         return  this.setState({showSideDrawer: !prevState.showSideDrawer});
     }
    
    render(){
        
        return(
           <Aux>
               <ToolBar drawerToggle={this.drawerToggleHandler} />
               <SideDrawer  open={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
        
               <main  className={classes.Content}> 
                   {this.props.children} 
               </main>
        
            </Aux>
    
    
    
    
    );
         
        
        
    }
    
       
        
}
    
export default Layout ;