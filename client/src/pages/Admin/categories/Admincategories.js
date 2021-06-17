/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { Modal, Button, Form } from "react-bootstrap";
import { Link} from "react-router-dom";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  deleteCategory,
  getCategory,
} from "../../../JS/actions/category";
import SpinnerPage from "../../Spinner/Spinner";

const Admincategories = ({ hisory,id }) => {



  const categories = useSelector((state) => state.categoryReducer.categories);
  const loading = useSelector((state) => state.categoryReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [
    dispatch,
  ]);
  
  const [category, setCategory] = useState({ name: "" });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  //model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashbored-accueilc">
      <div>
        <Link to="/Admindashboard">
          <h1>Dashboard admin </h1>
        </Link>
        <MDBContainer className="listc">
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem href="/Admindashboard/Admincategories" active>
              List Of Categories
            </MDBListGroupItem>
            <MDBListGroupItem
              MDBListGroupItem
              href="/Admindashboard/Adminproducts"
            >
              List Of Products
            </MDBListGroupItem>
            <MDBListGroupItem href="/Admindashboard/Adminusers">
              List Of users
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
        <Link to="/Admindashboard/Admincategories/Addcategory">
          <MDBBtn className="BtnSign" gradient="aqua" width="50%">
            add Category
          </MDBBtn>
        </Link>
      </div>

      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="right-dashc">
          <MDBTable hover >
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>Name Categories</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              { categories &&
                categories.map((category) => (
                <tr className="tabcategory">
                  <td>{category.name}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Link to={`/Admindashboard/Admincategories/EditCategory/${category._id}`}>
                  <i className="fas fa-edit" 
                  onClick={() => {dispatch(getCategory(category._id))}}  ></i>{" "}
                  </Link></td>
                  <td><i class="far fa-trash-alt"
                    onClick={() => dispatch(deleteCategory(category._id))}></i></td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>)}
    </div>
  );
};

export default Admincategories;
