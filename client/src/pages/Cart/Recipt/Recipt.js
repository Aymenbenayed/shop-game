import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { ResetCart } from "../../../JS/actions/cart";
import success from "../../../Assets/success.png"
import logo from "../../../Assets/logo.jpg"
import "./Recipt.css"
import PDF from "./PDF";


const Recipt = () => {
const ref = React.createRef();

const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.user);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const getCartSubTotal = () => {
    return cartItems
        .reduce((price, product) => price + product.price * product.qty, 0)
        ;
};
const currentDateTime= Date().toLocaleString()
/* let now = new Date();
let heure= now.getHours()
let day =now.getDay() */
  return (
    <div className="Reciptt" ref={ref}>
        <div className="recipt-headerr"> 

            <img src={logo}  alt="logo" className="logo"/>
            <p><h4>Just For Games</h4> <br/> 
                Ariena jadida , Ariana <br/>
                Phone : (216) 0000000 <br/>
                infocontact@gmail.com <br/>
                www.justforgames.com</p>
        </div>
        <div className="buyer">
        <h3> Welcome <span>{user?.name}  </span>, and thank you for your confidence </h3>
        <p>delivred le {currentDateTime}   </p>
        </div>
        <div className="tablee">
            <MDBTable hover>
            <MDBTableHead color="primary-color" textWhite>
                <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {cartItems &&
                cartItems.map((item) => (
                    <tr className="recipt">
                    <td>{item.name}</td>
                    <td>{item.qty} </td>
                    <td>{item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "tnd",
                })} </td>
                    </tr>))}
            </MDBTableBody>
            </MDBTable>
        </div>
        <div className="recipt-subtotal">
                SubTotal :  <h3>  {(getCartSubTotal()).toLocaleString("en-US", {
                            style: "currency",
                            currency: "tnd",
                            })}</h3>
        </div>
        <div className="success">
            <img src={success} alt="success" width="10%"/> 
        </div>
        <div className="btn-receipt">
            <Link to="/">
            <MDBBtn rounded  color="success" className="finish-btnn"
            onClick={()=>dispatch(ResetCart())}
            >Go Home</MDBBtn>
        </Link>
        <PDF/>
        </div>
        
    </div>
)};

export default Recipt;
