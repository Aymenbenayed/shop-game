import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";



//refresh cart 
const cartFromLocalStorage=localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : []

const CART_INITIAL_STATE = {
    cartReducer:{
      cartItems:cartFromLocalStorage
}
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  CART_INITIAL_STATE,
  composeEnhancer(applyMiddleware(thunk))
);
