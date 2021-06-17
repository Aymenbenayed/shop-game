import axios from "axios"
import { FAIL_FAVORITE, GET_ALL_FAVORITE, LOAD_FAVORITE } from "../actionTypes/favorite"


//GET ALL Favorite
export const getAllFavorite = () => async (dispatch) =>{
    dispatch({type : LOAD_FAVORITE})
    try {
        const result = await axios.get('/api/favorite/')
        dispatch({type : GET_ALL_FAVORITE, payload : result.data})
    } catch (error) {
        console.log(error);
    }
}

//POST NEW Favorite
export const addFavorite = (newFavorite) => async (dispatch) =>{
    try {
        await axios.post('/api/favorite/add',newFavorite)
        dispatch(getAllFavorite())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_FAVORITE, payload: error.response.data.errors })
    }
} 

//update Favorite
export const updateFavorite = (id , Favorite) => async (dispatch) =>{
    try {
        await axios.put(`/api/favorite/update/${id}`,Favorite)
        dispatch(getAllFavorite())
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_FAVORITE, payload: error.response.data.msg })
    }
}