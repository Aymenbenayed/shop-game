import {
    GET_CATEGORIES_LOAD,
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_SUCESS,GET_CATEGORY_FAIL,GET_CATEGORY_SUCESS,GET_CATEGORY_LOAD
} from "../actionTypes/category";
import axios from 'axios'



export const getCategories = () => async (dispatch) => {
    dispatch({type:GET_CATEGORIES_LOAD})
    try {
        const res = await axios.get("/api/category")
        dispatch({type: GET_CATEGORIES_SUCESS,payload:res.data.listCategories})
    } catch (error) {
        dispatch({type:GET_CATEGORIES_FAIL,payload:error})
        console.log(error)
    }
}



//add Category
export const createCategory = (newCategory) => async (dispatch) => {
    
    try {
        await axios.post("/api/category/create", newCategory)
        dispatch(getCategories())
        alert("category added succefully")
    } catch (error) {
        console.log(`${error}`,error)
    }}


/* export const createCategoryy = formData => async dispatch =>{
    try {
        dispatch({ type : CATEGORIES_LOAD });
        const res = await axios.post('/api/category',formData)
        dispatch({ type : CATEGORIES_FAIL })
        dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload : res.data.successMessage, 
            
        })
        dispatch({
            type: CREATE_CATEGORY  ,
            payload:res.data.category
        })
        console.log(res)
    } catch (err){
        console.log('create category api error : ' , err);
        dispatch({type: SHOW_ERROR_MESSAGE })
        dispatch({
            type : SHOW_ERROR_MESSAGE,
            payload:err.res.data.errorMessage,
        })
    }

}
 */


//modify catergory
export const edittCategory = (_id,newCategory) => async (dispatch) => {
    try {
        await axios.put(`/api/category/${_id}`,newCategory)
        dispatch(getCategories())
        alert("category updated succefully")
    } catch (error) {
        console.log(error)
alert("category updated succefully")
}}


//delete category 
export const deleteCategory = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/category/delete/${id}`)
        alert("category deleted succefully")
        dispatch(getCategories())
    } catch (error) {
        console.log(error)
    }
}



export const getCategory = (id) => async (dispatch) => {
    dispatch({type:GET_CATEGORY_LOAD})
    try {
        const res = await axios.get(`/api/category/${id} `)
        dispatch({type: GET_CATEGORY_SUCESS, payload : res.data })
    } catch (error) {
        dispatch({type:GET_CATEGORY_FAIL,payload:error})
        console.log(error)
    }
}