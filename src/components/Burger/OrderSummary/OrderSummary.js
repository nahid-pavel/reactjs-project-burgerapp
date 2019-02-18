import React,{Component} from 'react';
import Aux from  '../../../hoc/Auxillary';

class OrderSummary extends Component{
    
   componentWillUpdate(){
       
        console.log(['component is updating']);
        
    } 
    
  render(){
    
    const ingredientsSummary = Object.keys(this.props.ingredients).map(igkey=>{
                           
                            return <li><span style={{textTransform:'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]} </li>
        
                        });
    return(
    
       <Aux>
         
          <h3> Your Order </h3>
          <p>A delicious burger with following ingredients : </p>
           <ul>
            {ingredientsSummary}
           </ul>
          <p> Continue to checkout ? </p>
        
       </Aux>
    
    
    );
       
       
       
   }
    
    
}

export default OrderSummary;