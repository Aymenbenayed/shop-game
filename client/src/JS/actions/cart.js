import {REMOVE_FROM_CART,ADD_TO_CART, ADJUST_QTY, RESET_CART } from '../actionTypes/cart'
import axios from 'axios'

//add to cart
/* export const addToCart = (id , qty ) => async(dispatch , getState) => {
    dispatch({
        type: ADD_TO_CART,
        payload: {
            id,qty}})
            console.log(id, qty)
    localStorage.setItem("cart",JSON.stringify(getState().cartReducer.cartItems));
};
 */


//add to cart
export const addToCart = (id , qty ) => async(dispatch , getState) => {
    const { data } = await axios.get(`/api/product/${id} `);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.productToFind._id,
            name: data.productToFind.name,
            productImage: data.productToFind.productImage,
            price: data.productToFind.price,
            countInStock: data.productToFind.countInStock,
            qty,
        },
    });
localStorage.setItem("cart",JSON.stringify(getState().cartReducer.cartItems));
};


//remove from cart 
export const deleteProduct= (id) => (dispatch, getState)=>{

    dispatch({
        type:REMOVE_FROM_CART,
        payload:id , 
    })
    localStorage.setItem("cart",JSON.stringify(getState().cartReducer.cartItems));
};


export const adjustQty=(itemID,value) =>{
    return  {
        type : ADJUST_QTY,
        payload:{
            id : itemID,
            qty: value
        }
    }
}

export const ResetCart = () => {
    return {
        type: RESET_CART,
    };
};
