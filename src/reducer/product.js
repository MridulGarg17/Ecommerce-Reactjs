import { ADD_PRODUCT, ADD_TO_CART,REMOVE_FROM_CART } from '../actions/types'
const initialState = [];
export default function (state = initialState, action) {
    const { type, payload } = action
    // state are immuatble
    switch (type) {
        case ADD_PRODUCT:
            const { list } = payload
            return { ...state, list };

        case ADD_TO_CART:
            const { product } = payload
            const updatedList = state.list.map((item) => {
                if(item.id==payload.id){
                    item.inCart=true;
                    
                }
                return item;
                
            })
            return { ...state, list: updatedList };

        case REMOVE_FROM_CART:
            const updatedListnew = state.list.map((item)=>{
                if(item.id==payload.id){
                    item.inCart=false;
                }
                return item;
            })   
            return {...state,list:updatedListnew};

        default:
            return state;
    }
}