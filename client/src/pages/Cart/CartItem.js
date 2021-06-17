import React from "react";
import "./Cartitem.css";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";


const CartItem = ({  item , qtyChangeHandler , removeHandler }) => {

    const product = useSelector((state) => state.productReducer.product);

return (
    <div className="cartitem">
        <div className="cartitem__image">
            <img className="cartitemm"  src={item.productImage} alt="sony" />
        </div>
        <Link to={`/category/produit/${product.id}/${item.product}`} className="cartItem__name">
            <p>{item.name.length > 30
                    ? item.name.substring(0, 30) + "..."
                    : item.name.substring(0, 30)}</p>
        </Link>
        <p className="cartitem__price">{(item.price).toLocaleString("en-US", {
                style: "currency",
                currency: "tnd",
                })} </p>
        <select value={item.qty} 
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select">
        {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
            {x + 1}
            </option>
            ))}
        </select>
        <button
            className="cartItem__deleteBtn"
            onClick={() => removeHandler(item.product)}>
            <i className="fas fa-trash"></i>
        </button>
    </div>
);
};
export default CartItem;
