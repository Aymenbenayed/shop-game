import {
GET_PRODUCTS_LOAD,GET_PRODUCTS_SUCESS,GET_PRODUCTS_FAIL,GET_PRODUCT_LOAD,GET_PRODUCT_SUCESS,GET_PRODUCT_FAIL } from "../actionTypes/product";

import axios from 'axios'


export const getProducts = () => async (dispatch) => {
    dispatch({type:GET_PRODUCTS_LOAD})
    
    try {
        const res = await axios.get("/api/product")
        dispatch({type: GET_PRODUCTS_SUCESS,payload:res.data.listProducts})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL,payload:error})
        console.log(error)
    }
}

export const getProduct = (id) => async (dispatch) => {
    dispatch({type:GET_PRODUCT_LOAD})
    try {
        const res = await axios.get(`/api/product/${id} `)
        dispatch({type: GET_PRODUCT_SUCESS, payload : res.data})
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL,payload:error})
        console.log(error)
    }
}

// add new product
export const createProduct = (newProduct) => async (dispatch) => {
    try {
        await axios.post("/api/product/", newProduct)
        dispatch(getProducts())
        alert("product added succefully")
    } catch (error) {
        console.log(`${error}`,error)
        alert("you can't save this product");
    }
}

// delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/product/delete/${id}`)
        console.log(id)
        dispatch(getProducts())
        alert('Product deleted succefully')
    } catch (error) {
        console.log(`${error}`,error)
        console.log(error)
        
    }
}

//edit product
export const editProduct = (_id,newProduct) => async (dispatch) => {

    try {
        await axios.put(`/api/product/update/${_id}`,newProduct)
        dispatch(getProducts())
        alert("product updated succefully")
    } catch (error) {
        console.log(`${error}`)
        alert("you cant update product")
}}