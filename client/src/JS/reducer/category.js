import {GET_CATEGORIES_FAIL,
    GET_CATEGORIES_LOAD,
    GET_CATEGORIES_SUCESS,
    GET_CATEGORIES,
    PUT_CATEGORY_FAIL ,PUT_CATEGORY,
    GET_CATEGORY_SUCESS} from '../actionTypes/category'

const initState =  {
    categories:[],
    error:[],
    loading: false,
    category:[],
}


const categoryReducer = (state = initState,{type,payload}) => {
    switch(type){
        case GET_CATEGORIES_LOAD : return { ...state , loading : true }
        case GET_CATEGORIES_SUCESS : return {...state, loading : false , categories:payload}
        case GET_CATEGORIES_FAIL : return {...state, loading : false , errors:payload}
        case GET_CATEGORIES : return {...state, category:payload}
        case GET_CATEGORY_SUCESS : return {...state, category:payload} 
        case PUT_CATEGORY : return {...state ,loading : false , category:payload }
        case PUT_CATEGORY_FAIL : return {...state ,loading : false , errors:payload }
        default : return state 
    }
}
export default categoryReducer