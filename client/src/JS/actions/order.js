import axios from "axios"
import { ADD_PRODUCT, GET_ALL_ORDER, LOAD_ORDER, FAIL_ORDER,SUM_TOTAL, GET_ORDER_LOAD}
from "../actionTypes/TypeOrder"


//GET ALL Order
export const getAllOrder = () => async (dispatch) =>{
    dispatch({type : LOAD_ORDER})
    try {
        const result = await axios.get('/api/order/')
        dispatch({type : GET_ALL_ORDER, payload : result.data})
    } catch (error) {
        console.log(error);
    }
}

//ADD Order
export const addOrder = (newOrder) => async (dispatch) =>{
    try {
        await axios.post('/api/order/addOrder',newOrder)
        dispatch(getAllOrder())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_ORDER, payload: error.response.data.errors })
    }
} 

//update Order
export const updateOrder = (id , order) => async (dispatch) =>{
    try {
        await axios.put(`/api/order/update/${id}`,order)
        dispatch(getAllOrder())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_ORDER, payload: error.response.data })
    }
} 

//add PRODUCTS
export const addProduct = (products) =>{
    return {
        type : ADD_PRODUCT,
        payload : products
    }
}


export const sumTotal = (qty,Price,oldQty)=>
{
    return{
        type: SUM_TOTAL,
        payload:{qty,Price,oldQty}
    }
}



//DELET product
export const ProductOrderToDelete =(id)=> async(dispatch,getState)=>
{
    dispatch({type: GET_ORDER_LOAD})
    try {
        await axios.delete(`/api/order/delete/${id}`)
        // dispatch({type: GET_CONTACTS_SUCCESS })
        dispatch(getAllOrder())
    } catch (error) {
        console.log(error)
    }
        // localStorage.setItem("cart",JSON.stringify(getState().orderReducer.products));

}