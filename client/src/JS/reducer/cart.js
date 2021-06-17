import {
  REMOVE_FROM_CART,
  ADD_TO_CART,
  RESET_CART,
} from "../actionTypes/cart";
import { GET_ALL_ORDER, LOAD_ORDER } from "../actionTypes/order";

const CART_INITIAL_STATE = {
  cartItems: [],
  orders:[],
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
switch (action.type) {
  case LOAD_ORDER:
            return {...state,loadOrder : true};
        case GET_ALL_ORDER:
            return {
                ...state,
                orders:[],
                cartItems : []
            };
  case ADD_TO_CART:
      const item = action.payload
      const existItem = state.cartItems.find((x)=> x.product === item.product);
      if(existItem){
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }else {
        return{
          ...state,
          cartItems: [ ...state.cartItems, item]
        }
      }

  case REMOVE_FROM_CART:
    return {
        ...state,
        cartItems: state.cartItems.filter((x)=>x.product !== action.payload)

      };
      case RESET_CART:
        localStorage.removeItem("cart");
        
        return {
          ...state,
          cartItems:[]
        };
  
  default:
    return state;
}};

export default cartReducer;
