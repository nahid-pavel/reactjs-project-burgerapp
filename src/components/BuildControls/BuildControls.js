import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props)=>{
    
    const controllers = [
        
       {label: "Salad", type:"salad"},
       {label: "Meat",  type:"meat"},
       {label: "Chicken", type:"chicken"},
       {label: "Cheese", type:"cheese"},
        
        
    ]
    
    
    
    return(
       
        <div className={classes.BuildControls}>
        
           <p> Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        
            {controllers.map(ctr=>(
              
                 <BuildControl 
                     key={ctr.label} 
                     label={ctr.label}
                     added={()=>  props.ingredientAdded(ctr.type)}
                     removed={()=> props.ingredientRemoved(ctr.type)}
                     disabled={props.disabled[ctr.type]}

                    />
        
           
            ))
    
            }
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}> Order Now </button>
        
        </div>
    
    
    
    )
    
    
}


export default buildControls;