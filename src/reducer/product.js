import { ADD_PRODUCT, ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QUANTITY } from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = {totaProductCount:0};
export default function (state = initialState, action) {
    const { type, payload } = action
    // state are immuatble
    switch (type) {
        case ADD_PRODUCT:
            const list = payload.list.map((item)=> {
                item.key = uuidv4();

                return (item);
            })
            return { ...state, list };

        case ADD_TO_CART:
          
            const updatedList = state.list.map((item) => {
                if(item.id===payload.id){
                    item.inCart=true;
                    item.count++;
                    item.key = uuidv4();
                }
                return item;
                
            })
            return { ...state,totaProductCount:state.totaProductCount + 1, list: updatedList };

        case REMOVE_FROM_CART:
            let quatityOfProduct = 0;
            const updatedListnew = state.list.map((item)=>{
                if(item.id===payload.id){
                    quatityOfProduct = item.count;
                    item.inCart=false;
                    item.count=0;
                    item.key = uuidv4();
                }
                return item;
            })   
            return {...state,totaProductCount:state.totaProductCount - quatityOfProduct,list:updatedListnew};

            case CHANGE_QUANTITY:
                const {product: targetProduct ,flag} = payload
                const updatedListnew2 = state.list.map((item)=>{
                    if(item.id===targetProduct.id){
                       if(flag){
                           item.count++;
                       }else{
                           item.count--;
                           if(item.count===0){
                            item.inCart=false;
                           }
                       }
                        
                        item.key = uuidv4();
                    }
                    return item;
                })   
                return {...state,list:updatedListnew2,totaProductCount:flag?state.totaProductCount + 1:state.totaProductCount - 1,};    

        default:
            return state;
    }
}