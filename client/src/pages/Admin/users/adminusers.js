import React, { useEffect} from "react";
import { MDBContainer, MDBListGroup, MDBListGroupItem, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Link } from "react-router-dom";
import "./adminusers";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../JS/actions/user";

import SpinnerPage from "../../Spinner/Spinner";
const Adminusers = () => {
  const users = useSelector((state) => state.showusersReducer.users);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.showusersReducer.loading)
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  
  return (
    <div className="dashbored-accueilc">
      <div>
        <Link to="/Admindashboard">
          <h1>Dashboard admin </h1>
        </Link>
        <MDBContainer className="listc">
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem href="/Admindashboard/Admincategories" >
              List Of Categories
            </MDBListGroupItem>
            <MDBListGroupItem MDBListGroupItem href="/Admindashboard/Adminproducts">
              List Of Products
            </MDBListGroupItem>
            <MDBListGroupItem href="/Admindashboard/Adminusers" active>
              List Of users
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
      </div>
      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="right-dashc">
          <MDBTable hover>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>Full Name</th>
                <th>Pseudo</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Adress</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {users && users.map((user) => (
                <tr className="tabcategory">
                    <td>{user.name}</td>
                    <td>{user.pseudo}</td>
                    <td>{user.role? "admin" : "user" }</td> 
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.adress}</td>
                    <td><Link to={`/Admindashboard/Adminusers/EditUsers/${user._id}`}>
                      <i class="fas fa-edit" ></i>
                    </Link></td>
                    <td><i class="far fa-trash-alt" onClick={() => dispatch(deleteUser(user._id))}></i></td>
                    
                    
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      )}
    </div>
  );
};

export default Adminusers;
