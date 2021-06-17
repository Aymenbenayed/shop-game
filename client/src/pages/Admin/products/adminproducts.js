import React, { useEffect} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { Link } from "react-router-dom";
import "./Products.css";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  getProducts,
} from "../../../JS/actions/product";
import SpinnerPage from "../../Spinner/Spinner";

const Adminproducts = ({ history }) => {
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);


  return (
    <div className="dashbored-accueil">
      <div>
        <Link to="/Admindashboard">
          <h1>Dashboard admin </h1>
        </Link>
        <MDBContainer className="list">
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem href="/Admindashboard/Admincategories">
              List Of Categories
            </MDBListGroupItem>
            <MDBListGroupItem
              MDBListGroupItem
              href="/Admindashboard/Adminproducts"
              active>
              List Of Products
            </MDBListGroupItem>
            <MDBListGroupItem href="/Admindashboard/Adminusers">
              List Of users
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
        <Link to="/Admindashboard/Adminproducts/Addproduct">
          <MDBBtn className="BtnSign" gradient="aqua" width="50%">
            add Product
          </MDBBtn>
        </Link>
      </div>
      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="right-dash">
          <MDBTable hover>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>Name Product</th>
                <th>Marque</th>
                <th>Price</th>
                <th>Quanty</th>
                <th>category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {products.map((product) => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.marque}</td>
                  <td>{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>{product.category?.name}</td>
                  <td>
                    <Link
                      to={`/Admindashboard/Adminproducts/Editproduct/${product._id}`}
                    >
                      <i
                        className="fas fa-edit"
                        onClick={() => {
                          dispatch(getProduct(product._id));
                        }}
                      ></i>{" "}
                    </Link>
                  </td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => dispatch(deleteProduct(product._id))}
                    ></i>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      )}
    </div>
  );
};

export default Adminproducts;