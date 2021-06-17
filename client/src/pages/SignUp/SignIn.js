/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./SignUp.css";
import {MDBBtn,MDBInput} from 'mdbreact'
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../JS/actions/user";
import Errors from "../Error/Errors";
import { Link } from "react-router-dom";
import signin from "../../Assets/signin.jpg"
const SignIn = ({ history }) => {
  const [user, setuser] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  console.log(errors);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  },[]);

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
      <div className="card card0 border-0">
      <div className="row d-flex">
      <div className="col-lg-6">
            {" "}
            <img src={signin} className="image" alt="phoito" />{" "}
          </div>{" "}
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5 mt-3 ">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                  <i className="fab fa-facebook-f" ></i>
                </div>
                <div className="twitter text-center mr-3">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="linkedin text-center mr-3">
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />{" "}
                <small className="or text-center">Or</small>
                <div className="line" />
              </div>
              <MDBInput label="Email" icon="at"
              type="text"
              name="email"
              onChange={handleChange} />

              <MDBInput label="Password" icon="unlock-alt"
              type="password"
              name="password"
              onChange={handleChange} />  
              <div className="Btnn">
                {" "}
                <MDBBtn className="BtnSign" gradient="aqua" onClick={() => dispatch(login(user, history))}>Sign In</MDBBtn>
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <a className="text-danger " href="/signup">
                    <Link to="/signup">Register</Link>{" "}
                  </a>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;