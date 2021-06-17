import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../JS/actions/category'
import './navbar.css'


const SideNav = () => {
const categories=useSelector((state)=>state.categoryReducer.categories)
const dispatch=useDispatch()
useEffect(() => {
    dispatch(getCategories())
    }
, [])
    return (
        <div className="sideNav">
                {/* <ul className="list-nav">{categories
                        .map(category=> 
                    <li to={`/category/produit/${category._id}`} activestyle="true">
                    {category.name}
                    </li>
                    )}
                    <li>Account</li>
                    <li>Log Out</li>
                    <li></li>
                </ul>     */}   
                <h1>heello sidenav</h1>     
        </div>
    )
}

export default SideNav
