/* eslint-disable array-callback-return */
import ScrollToTop from "react-scroll-to-top";
import React ,{ useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { getProducts } from '../../JS/actions/product'
import { useParams } from 'react-router';
import './ProductCard.css'
import SpinnerPage from "../Spinner/Spinner";
import { Form, FormControl } from "react-bootstrap";




const ProductList = () => {
    const {id} = useParams();
    
    const [filterName, setFilterName] = useState("");
    const loading = useSelector(state => state.productReducer.loading)
    const products=useSelector(state=> state.productReducer.products)
    const dispatch=useDispatch()
        useEffect(() => {
        dispatch(getProducts())
        },[dispatch])


    return (
    <div >
        <ScrollToTop smooth />
            <div className="card-headerr">
            <Form inline >
                    <FormControl
                    onChange={(e) => setFilterName(e.target.value)}
                    value={filterName}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    />
            </Form>
            </div>

            {loading ? (
            <SpinnerPage />
            ) : (
            <div className="product-list">
                {products
                .filter((product) => {
                    if (product.category._id === id) return product;
                })
                .filter((category) =>
                    category.name.toLowerCase().includes(filterName.toLowerCase())
                )
                .map((product) => (
                    <ProductCard
                    key={product.id}
                    idCategory={id}
                    product={product}
                    />
                ))}
            </div>
            )}
        </div>
        );
} 
export default ProductList 