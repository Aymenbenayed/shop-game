import {GET_PRODUCTS_LOAD,GET_PRODUCTS_SUCESS,GET_PRODUCTS_FAIL,GET_PRODUCT_FAIL,GET_PRODUCT_SUCESS,GET_PRODUCT_LOAD} from "../actionTypes/product";

const initState =  {
    products:[],
    product:{},
    errors:[],
    loading: false
}


const productReducer = (state = initState,{type,payload}) => {
    switch(type){
        
        case GET_PRODUCTS_LOAD : return { ...state , loading : true }
        case GET_PRODUCTS_SUCESS : return {...state , loading : false , products:payload}
        case GET_PRODUCTS_FAIL : return {...state , loading : false , errors:payload}


        case GET_PRODUCT_LOAD: return {...state , loading:true}
        case GET_PRODUCT_SUCESS: return {...state , loading : false , product : payload}
        case GET_PRODUCT_FAIL: return {...state , loading : false , errors : payload}
        default : return state 
}}
export default productReducer