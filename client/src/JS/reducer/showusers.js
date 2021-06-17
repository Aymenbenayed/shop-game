import {GET_USERS_FAIL,
    GET_USERS_LOAD,
    GET_USERS_SUCESS,
    GET_USERS,GET_USER_FAIL,GET_USER_LOAD,GET_USER_SUCESS,GET_USER} from '../actionTypes/user'

const initState =  {
    users:[],
    error:[],
    user:[],
    loading: false
}


const showusersReducer = (state = initState,{type,payload}) => {
    switch(type){
        case GET_USERS_LOAD : return { ...state , loading : true }
        case GET_USERS_SUCESS : return {...state, loading : false , users:payload}
        case GET_USERS_FAIL : return {...state, loading : false , errors:payload}
        case GET_USERS : return {...state, user:payload}
        
        case GET_USER_LOAD : return { ...state , loading : true }
        case GET_USER_SUCESS : return {...state, loading : false , user:payload}
        case GET_USER_FAIL : return {...state, loading : false , errors:payload}
        case GET_USER : return {...state, user:payload}
        default : return state 
    }
}
export default showusersReducer