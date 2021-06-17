import React ,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import ScrollToTop from "react-scroll-to-top";
import './CategoriesList.css'
import Categorie from './CategorieCard'
import { getCategories } from '../../JS/actions/category'
import SpinnerPage from '../Spinner/Spinner'

const CategoriesList = () => {
    

    const loading = useSelector(state => state.categoryReducer.loading)
    const categories=useSelector(state=> state.categoryReducer.categories)
    const dispatch=useDispatch()
        useEffect(() => {
        dispatch(getCategories())
        },[dispatch])
        

        
    return ( 
    <div> 
        <ScrollToTop smooth />
        {loading ? <SpinnerPage />:
            <div className="category-list">
                    {categories
                        // eslint-disable-next-line array-callback-return
                        .filter((category) => {
                    if (category.parentId==null) return category;
                })
                    .map(category => 
                    <Categorie key={category.id} category={category} />)}
            </div>}
    </div>
    )
}

export default CategoriesList
