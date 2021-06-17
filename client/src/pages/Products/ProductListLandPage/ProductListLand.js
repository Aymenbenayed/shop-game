/* eslint-disable array-callback-return */
import ScrollToTop from "react-scroll-to-top";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { getProducts } from "../../../JS/actions/product";

import { useParams } from "react-router";
import SpinnerPage from "../../Spinner/Spinner";

const ProductListLand = () => {
  const date = ["2021-05-13"];

  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <ScrollToTop smooth />




          {/* filtre par rates */}
      <h1>filtre par rate </h1>
      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="product-list">
          {products
            .filter((el) => {
              if (el.rating >= 4) return el;})

            .map((product) => (
              <ProductCard key={product.id} idCategory={id} product={product} />
            ))}
        </div>
      )}





                {/* filtre des nouveautes */}

      <h1>les nouveaute </h1>
      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="product-list">
          {products
            .filter((el) => {
              if (el.createdAt > date) return el;
            })
            .map((product) => (
              <ProductCard key={product.id} idCategory={id} product={product} />
            ))}
        </div>
      )}









                {/* all products*/}
      <h2>Liste of All products</h2>
      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} idCategory={id} product={product} />
          ))}
        </div>
      )}
      {/* filtre par rate  */}


      
    </div>
  );
};
export default ProductListLand;
