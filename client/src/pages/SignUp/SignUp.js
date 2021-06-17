import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {MDBBtn, MDBInput} from 'mdbreact'
import Errors from "../Error/Errors";
import { register, videErrors } from "../../JS/actions/user";
import "./SignUp.css";
import signin from "../../Assets/signin.jpg"


const SignUp = ({ history }) => {
  const [user, setuser] = useState({});
  const errors = useSelector((state) => state.userReducer.errors);
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                  <i className="fab fa-facebook-f"></i>
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

                {/* Full Name  */}
                <MDBInput label="name" icon="user"
                type="text"
                name="name"
                onChange={handleChange} />

                {/* Pseudo */}

                <MDBInput label="Pseudo" icon="user-edit"
                type="text"
                name="pseudo"
                  onChange={handleChange} />

                {/* email */}

                <MDBInput label="Email" icon="at"
              type="text"
              name="email"
                  onChange={handleChange} />

                {/* Phone  */}

                <MDBInput label="phone" icon="mobile-alt"
                type="Number"
                name="phone"
                  onChange={handleChange} />
              
                {/* Password  */}

                <MDBInput label="Password" icon="unlock-alt"
                type="Password"
                name="password"
                onChange={handleChange} /> 

                {/* adress */}

                <MDBInput label="Adress" icon="map-marked"
                type="text"
                name="adress"
                onChange={handleChange} /> 

                <div className="Btnn">
                    {" "}

                <MDBBtn className="BtnSign" gradient="aqua" type="submit" 
                  onClick={() => {dispatch(register(user));} }  
                  >Sign In</MDBBtn> {/* history.push("/") */}
                </div>
              <div className="row mb-4 px-3">
                {" "}
                <br/>
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <a href="/signin" >Sign in </a>
                </small>{" "}
              </div>
              <div className="row">
              <a href="http://localhost:7000/auth/facebook" className="waves-effect waves-light btn deep-purple darken-2">signup with facebook</a>   
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
