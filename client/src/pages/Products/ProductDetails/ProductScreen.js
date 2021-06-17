import "./productList.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

// Actions
import { getProduct } from "../../../JS/actions/product";
import { addToCart } from "../../../JS/actions/cart";
import Loading from "../../Spinner/Spinner";
import Rating from "../../Rating/Rating";

const ProductScreen = ({ history , rating ,product}) => {
  const { idd } = useParams();
  const dispatch = useDispatch();
  const Productt = useSelector(
    (state) => state.productReducer.product.productToFind
  );
  const loading = useSelector((state) => state.productReducer.loading);
  useEffect(() => {
    dispatch(getProduct(idd));
  }, [idd, dispatch]);

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(addToCart(Productt._id, qty));
    history.push(`/cart`);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="header">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <a className="breadcrumb__link link" href="/">
                    Home
                  </a>
                  <svg
                    class="icon icon--arrow-right"
                    viewBox="0 0 8 12"
                    role="presentation"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      d="M2 2l4 4-4 4"
                      fill="none"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                </li>
                <li className="breadcrumb__item">
                  <a
                    className="breadcrumb__link link"
                    href={`/category/produit/${Productt?.category}`}>
                    {Productt?.category.name}
                  </a>
                  <svg
                    class="icon icon--arrow-right"
                    viewBox="0 0 8 12"
                    role="presentation" >
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      d="M2 2l4 4-4 4"
                      fill="none"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                </li>
                <li className="breadcrumb__item">
                  <span className="breadcrumb__link" aria-current="page">
                    {Productt?.name}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="productscreen">
            <div className="productscreen__left">
              {/* heeader */}
              <div className="left__image">
                <img
                  src={Productt?.productImage}
                  alt={Productt?.name}
                  width="80%"
                />
              </div>
              <div className="left__info">
                <p className="left__name">{Productt?.name}</p>
                <p>
                  <span className="desc">Price :</span>{" "}
                  {Productt?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "tnd",
                  })}
                </p>
                <p>
                  <span className="desc">rate: </span>{" "}
                  <Rating value={Productt?.rating}/>
                </p>
                <p>
                  {" "}
                  <span className="desc">Description:</span>{" "}
                  {Productt?.description}
                </p>
              </div>
            </div>
            <div className="productscreen__right">
              <div className="right__info">
                <p>
                  Price:
                  <span className="price">
                    {(Productt?.price * qty).toLocaleString("en-US", {
                      style: "currency",
                      currency: "tnd",
                    })}
                  </span>
                </p>
                <p>
                  Status:{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                      color="green"
                      fontSize="150%"
                    />
                  </svg>
                  <span className="stock">
                    {Productt?.countInStock > 3
                      ? "In Stock"
                      : 1 < Productt?.countInStock < 3
                      ? "stock limite"
                      : "Out of Stock"}
                  </span>
                </p>
                <p>
                  Quantity
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(Productt?.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
