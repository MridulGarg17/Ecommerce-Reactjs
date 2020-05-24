import {LOGIN_USER,LOGOUT_USER} from './types';

export const loginUser = (user) => dispatch =>{
 // console.log({user});
    dispatch({

        type :LOGIN_USER,
        payload:{user}
        
    }); 

}


export const logoutUser = (user) => dispatch =>{
   // console.log({user});
      dispatch({
  
          type :LOGOUT_USER,
          payload:{user}
          
      }); 
  
  }