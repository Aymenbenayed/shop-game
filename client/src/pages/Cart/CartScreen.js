import "./CartScreen.css";
import Paypal from '../Paypal/Paypal'
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import {addToCart,deleteProduct} from "../../JS/actions/cart"
import "./CartScreen.css"
import { useState } from "react";
const CartScreen = () => {
const dispatch = useDispatch()
const cartItems = useSelector((state)=>state.cartReducer.cartItems)


const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
};

const getCartSubTotal = () => {
    return cartItems
        .reduce((price, product) => price + product.price * product.qty, 0)
        ;
};

const qtyChangeHandler=(id,qty)=>{
    dispatch(addToCart(id,qty))
}

const removeFromCartHandler=(id) =>{
    dispatch(deleteProduct(id))
}


const [checkout , setCheckOut] = useState(false)
return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>

                {cartItems.length === 0 ? (
            <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
            ) : (
                cartItems.map((item) => (
                <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
                />)))}

            {/* 
                 */}
            </div>
            
        <div className="cartscreen__right">
            <div className="cartscreen__info">
                <p> Subtotal: <span>({getCartCount()})</span>  items</p>
                <p className="price.item">
                    <span>
                    {(getCartSubTotal()).toLocaleString("en-US", {
                            style: "currency",
                            currency: "tnd",
                            })}
                    </span>
                </p>
            </div>
            <div>
            {cartItems.length === 0 ?
                <button>Go to shop </button> : <div>
                    <Link to="/Recipt">
                    <button>Proceed To Checkout</button>
                </Link>
                {
                    checkout ? (
                        <Paypal />
                    ) : (<button onClick={()=>{setCheckOut(true)}}> Paypal </button>)}
                </div>
                }
            </div>
        </div>
        </div>
)};
export default CartScreen;
