import { combineReducers } from "redux";
import userReducer from "./user";
import categoryReducer from "./category"
import productReducer from "./product"
import showusersReducer from "./showusers"
import cartReducer from "./cart"
import favoriteReducer from './favorite'




const rootReducer = combineReducers({ showusersReducer , userReducer ,categoryReducer ,productReducer ,
cartReducer,favoriteReducer });
export default rootReducer;

