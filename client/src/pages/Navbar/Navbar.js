/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./index";
import {
  MDBBtnGroup,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
} from "mdbreact";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import { MDBBtn } from "mdbreact";
import "./navbar.css";
import { getCategories } from "../../JS/actions/category";
import SideNav from "./SideNav";


const Navbar = () => {
  //const cart=useSelector((state)=>state.cartReducer.cart)
  const categories = useSelector((state) => state.categoryReducer.categories);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <Nav className="navbar">
      <NavLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 172 172">

          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none">

            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#3498db">
              <path d="M56.4375,13.76c-0.94062,0.20156 -1.76031,0.77938 -2.2575,1.6125l-53.6425,86c-0.645,0.99438 -0.72562,2.2575 -0.215,3.3325l26.875,55.04c0.57781,1.19594 1.78719,1.94844 3.1175,1.935h108.36c1.26313,-0.01344 2.41875,-0.71219 3.01,-1.8275l29.885,-55.04c0.57781,-1.08844 0.5375,-2.39187 -0.1075,-3.44l-53.6425,-86c-0.63156,-1.00781 -1.72,-1.6125 -2.9025,-1.6125h-57.835c-0.1075,0 -0.215,0 -0.3225,0c-0.1075,0 -0.215,0 -0.3225,0zM59.4475,20.64h53.535l50.525,81.055l-62.35,-19.135zM58.265,21.93l14.2975,58.5875l-40.3125,74.0675l-24.8325,-51.17zM85.355,73.6375l16.77,26.1225h-32.25zM164.475,103.415l-27.8425,51.385h-102.4475l51.815,-46.44z"></path>
            </g>
          </g>
        </svg>
      </NavLink>
      <Bars />
      <NavMenu>
        {categories  
                      .filter((category) => {
                    if (category.parentId==null) return category;
                })
                        .map(category=> 
                    <NavLink to={`/category/soucat/${category._id}`} activestyle="true">
                    {category.name}
                    </NavLink>
                    )}


                                {/* dropdown souscategory */}
        {/* {categories
          .filter((category) => {
            if (category.parentId == null) return category;
          })
          .map((category) => (
            <Dropdown>
              <Dropdown.Toggle
                variant="info"
                id="dropdown-basic"
                
                activestyle="true"
              >
                {category.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories
                  .filter((ctg) => {
                    if (ctg.parentId === category._id) return ctg;
                  })
                  .map((ctg) => (
                    <Dropdown.Item
                      to={`/souscategorylist/${ctg.id}`}
                      activestyle="true">
                      {ctg.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          ))} */}


      </NavMenu>
      <SideNav />
      {isAuth ? (
        <div className="isAuth">
          <MDBBtnGroup>
            <MDBDropdown>
              <MDBDropdownToggle caret color="info">
                My Account
              </MDBDropdownToggle>
              <MDBDropdownMenu basic color="info">
                <Link to="/Profile">
                  <MDBDropdownItem className="account">
                    My account
                  </MDBDropdownItem>
                </Link>
                {isAuth && !(user && user.role===0)?
                  <Link to="/Admindashboard"> 
                        <MDBDropdownItem >
                          Admindashboard
                        </MDBDropdownItem>
                  </Link>: null}
                <MDBDropdownItem
                  to="/"
                  onClick={() => dispatch(logout())}
                  activestyle
                >
                  Log Out
                </MDBDropdownItem>
                <MDBDropdownItem divider activestyle />
                <Link to="/contact">
                  <MDBDropdownItem className="account" activestyle>
                    Contact Us
                  </MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBBtnGroup>
          <div className="cart">
            <h1>
              Welcome <br /> <span>{user && user.pseudo}</span>
            </h1>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              Cart {getCartCount()}
            </Link>
          </div>
        </div>
      ) : (
        <div className="isnotAuth">
          <NavBtn>
            <NavLink to="/signup" activeStyle>
              Sign Up
            </NavLink>
            <Link to="/signin">
              <MDBBtn gradient="blue">Sign In</MDBBtn>
            </Link>
          </NavBtn>
        </div>
      )}
    </Nav>
  );
};
export default Navbar;
