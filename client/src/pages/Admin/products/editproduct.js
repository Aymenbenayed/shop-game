/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../../../JS/actions/product";
import "./Products.css";

const Editproduct = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);

  const productt = useSelector(
    (state) => state.productReducer.product.productToFind
  );
  const [product, setProduct] = useState(productt);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleEdit = () => {
    dispatch(editProduct(productt._id, product));
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };



const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
    <div className="my-form">
      <Form>
        {/* id */}
        <Form.Group controlId="formBasicid">
          <Form.Label>id</Form.Label>
          <Form.Control
            className="controlproduct"
            type="id"
            placeholder={id}
            disabled
          />
        </Form.Group>

        {/* name */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name of Prodcut</Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="New name "
            name="name"
            value={product?.name}
            onChange={handleChange}
          />
        </Form.Group>

        {/*  marque */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>marque of Product</Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="New marque "
            name="marque"
            value={product?.marque}
            onChange={handleChange}
          />
        </Form.Group>

        {/* productImage */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Product Image </Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="Product Image"
            name="productImage"
            value={product?.productImage}
            onChange={handleChange}
          />
        </Form.Group>

        {/* descrption */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>description of Product</Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="New description "
            name="description"
            value={product?.description}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Price */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="controlproduct"
            type="Number"
            placeholder="New price"
            name="price"
            value={product?.price}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Quant in stock */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Count In Stock </Form.Label>
          <Form.Control
            className="controlproduct"
            type="Number"
            placeholder="New count in stock"
            name="countInStock"
            value={product?.countInStock}
            onChange={handleChange}
          />
        </Form.Group>

        {/* category */}
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            onChange={handleChange}
            required
          >
            <option value="">Choose one...</option>
            {categories &&
              categories
              .filter((category) => {
              if (!(category.parentId === category.id)) return category;
            })
              .map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
            <div className="buttons">
            <div>
            <Button variant="primary" onClick={handleShow}>
            Update
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                are you sure you want to update the product!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                        handleEdit();handleClose();
                        history.push("/Admindashboard/Adminproducts");}}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
            <Link to={"/Admindashboard/Adminproducts"}>
                <Button variant="danger" type="submit" className="Btn-cancel">
                Cancel
                </Button>
            </Link>
            </div>
        </Form>
    </div>
  );
};

export default Editproduct; /* history.push("/Admindashboard")  */
