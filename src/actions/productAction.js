import {ADD_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART} from './types';

export const setProducts = (list) => dispatch =>{
  
    dispatch({
        type :ADD_PRODUCT,
        payload:{list}
        
    }); 

}

export const addToCart = (product) => dispatch =>{
  
    dispatch({
        type :ADD_TO_CART,
        payload:product
        
    }); 

}

export const removeFromCart = (product) => dispatch =>{
  
    dispatch({
        type :REMOVE_FROM_CART,
        payload:product
        
    }); 

}