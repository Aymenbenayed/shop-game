import { GET_ALL_FAVORITE, LOAD_FAVORITE } from "../actionTypes/favorite";

const initialState ={
    favorite :[],
    loadFavorite : false
}

const favoriteReducer = (state=initialState,{ type, payload })=>{
    switch (type) {
        case LOAD_FAVORITE:
            return {...state,loadFavorite : true};
        case GET_ALL_FAVORITE:
            return {
                ...state,
                favorite : payload.favorite,
                loadFavorite : false
            };
        default:
            return state
    }
}

export default favoriteReducer;