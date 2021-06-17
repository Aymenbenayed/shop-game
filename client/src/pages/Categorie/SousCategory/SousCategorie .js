import React from 'react'
import '../Categories.css'
import {Link} from 'react-router-dom'

import {MDBBtn,MDBCol,MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle} from 'mdbreact'
const SousCategorie  = ({category}) => {
    return (<div>
            <MDBCol style={{ maxWidth: "19rem" }} className="cards">
                <MDBCard>
                <MDBCardImage className="img-fluid w-100" src={category.categoryImage} width="80%" alt="products"
                                waves />
                    <MDBCardBody>
                        <MDBCardTitle   MDBCardTitle>{category.name}</MDBCardTitle>
                        <Link to={`/category/produit/${category._id}`}>
                            <MDBBtn gradient="blue" >View Products</MDBBtn>
                        </Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}
export default SousCategorie 
