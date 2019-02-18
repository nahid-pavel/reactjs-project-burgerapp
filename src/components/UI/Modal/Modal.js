import React,{Component} from 'react';
import classes from './Modal.module.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Auxillary';
import Button from '../Button/Button';

class Modal extends Component{
    
shouldComponentUpdate(nextProps,nextState){
   
    return nextProps.show !== this.props.show || nextProps.children !== this.props.childern;
    
}
    
render(){
        
    return(
        
     <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed}></BackDrop>
        <div className={classes.Modal} 
             style={{transform: this.props.show? 'translateY(0)':'translateY(-100vh)',
                     opacity:   this.props.show? '1':'0'}}>
           {this.props.children}
           <Button btnType="Success" clicked={this.props.continuePurchase}>CONTINUE</Button>
           <Button btnType="Danger"  clicked={this.props.cancelPurchase}>CANCEL</Button>
        </div>
    </Aux>
   
    );
        
        
    }
    
}

export default Modal;