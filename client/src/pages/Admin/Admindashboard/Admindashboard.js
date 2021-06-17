import React from "react";
import { MDBContainer, MDBListGroup, MDBListGroupItem } from "mdbreact";
import "./Admindashboard.css";
const Admindashboard = () => {
return (
    <div className="dashbored-accueila">
        <div className="content">
        <h1>Dashboard admin </h1>
            <div className="dash">
                <div className="left-dash">
                <MDBContainer className="list">
                <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem href="/Admindashboard/Admincategories">
                    List Of Categories
                    </MDBListGroupItem>
                    <MDBListGroupItem MDBListGroupItem href="/Admindashboard/Adminproducts">
                    List Of Products
                    </MDBListGroupItem>
                    <MDBListGroupItem href="/Admindashboard/Adminusers">
                    List Of users
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBContainer>

            </div>
                <div className="right-dash">
                <img
                className="img-admin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFY8KHvy20pZcII0rPmCEyad6GNQzwgQRQQ&usqp=CAU"
                alt="admin"
                width="260%"
                />
            </div>
            </div>
        </div>
        </div>
);
};
export default Admindashboard;
