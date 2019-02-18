import React,{Component} from 'react';
import Aux from  '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES ={
        
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        chicken: 0.7
    }
    

class BurgerBuilder extends Component{
    
    
    state={
           
           ingredients:{
                        
                       meat: 0,
                       salad: 0,
                       cheese: 0,
                       chicken: 0
             
                       },
           totalPrice: 4,
           purchasable: false,
           purchasing: false,
           loading:false
            
        }

    updatingpurchaseState=(ingredients)=>{
        
        const sum=Object.keys(ingredients).map(igkey=>{
                      
                      return ingredients[igkey];
                      
                  }).reduce((sum,num)=>{
                       return sum+num;
                  },0);
        console.log(sum);
        
        this.setState({purchasable: sum > 0 })
        console.log(this.state.purchasable);
    }
    
    purchaseHandler=()=>{
        
        this.setState({purchasing: true})
    }
    
    purchaseCancelHandler=()=>{
        
        this.setState({purchasing: false})
    }
    
    purchaseContinueHandler=()=>{
        
        this.setState({loading: true})
        
        const order = {
            
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name:'Pavel',
                address:{
                    
                    street:'West Rampura',
                    zipcode:'1219',
                    country:'Bangladesh'
                },
                email:'pavelavw@gmail.com'
                
            },
            deliveryMethod:'fastest'
        }
        
        axios.post('/orders.json',order)
                  .then(response=>{
                     this.setState({loading:false, purchasing: false});
            
                    })
                  .catch(error=>{
                     this.setState({loading:false,  purchasing: false,});
             
                   });
    }

    addIngredientHandler= (type) =>{
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredients = {
            
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatingpurchaseState(updatedIngredients);
        
    }
    removeIngredientHandler= (type) =>{
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        let updatedIngredients = {
            
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatingpurchaseState(updatedIngredients);
        
    }
    
    

    
    
    render(){
        
        const disabledInfo = {
            
            ...this.state.ingredients
        
        }
        for(let key in disabledInfo){
            
             disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}  
            
            /> 
        
        if(this.state.loading){
            
            orderSummary=<Spinner />;
        }
        
        return(
            
            <Aux>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} continuePurchase={this.purchaseContinueHandler}  cancelPurchase={this.purchaseCancelHandler}>{orderSummary}</Modal>
               <Burger  ingredients={this.state.ingredients}/>
               <BuildControls  ingredientAdded={this.addIngredientHandler} 
                               ingredientRemoved={this.removeIngredientHandler} 
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               purchasing={this.purchaseHandler}
                               
                               disabled={disabledInfo}
                />
            </Aux>
        
        
        );
     }
    
    
    
}

export default BurgerBuilder;