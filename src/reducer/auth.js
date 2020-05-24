import { LOGIN_USER,LOGOUT_USER } from '../actions/types'

const initialState = {email:"",password:"",isLoggedin:false};
export default function (state = initialState, action) {
    const { type, payload } = action
    // state are immuatble
    switch (type) {
        case LOGIN_USER:
            let isLoggedin = false;
           const  {email,password }=payload.user
           if(email==="user@gmail.com" && password==="password"){
                isLoggedin = true;
           }
            return { ...state, email,password,isLoggedin };
           
        case LOGOUT_USER:
            return {initialState};


            default:
                return state;
        }
    }        