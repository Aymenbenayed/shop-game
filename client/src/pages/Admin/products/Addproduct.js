/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch /* , useSelector */, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createProduct } from "../../../JS/actions/product";
import "./Products.css";
const Addproduct = ({ history }) => {
  const [product, setProduct] = useState({
    name: "",
    marque: "",
    description: "",
    productImage: "",
    price: 0,
    countInStock: 0,
    category: "",
  });
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(createProduct(product));
  };

  return (
    <div className="addproduct">
      <Form>
        {/* id */}
        <Form.Group controlId="formBasicid">
          <Form.Label>id</Form.Label>
          <Form.Control
            className="controlproduct"
            type="id"
            placeholder="id"
            disabled
          />
        </Form.Group>

        {/* name */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name of Prodcut</Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="Name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </Form.Group>

        {/*  marque */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>marque of Product</Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="marque"
            name="marque"
            value={product.marque}
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
            value={product.productImage}
            onChange={handleChange}
          />
        </Form.Group>

        {/* descrption */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>description of Product</Form.Label>
          <Form.Control
            className="controlproduct"
            type="text"
            placeholder="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Price */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="controlproduct"
            type="Number"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Quant in stock */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Count In Stock </Form.Label>
          <Form.Control
            className="controlproduct"
            type="Number"
            placeholder="Count In Stock"
            name="countInStock"
            value={product.countInStock}
            onChange={handleChange}
          />
        </Form.Group>

        {/* category */}
        {/* <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Category of product</Form.Label>
            <Form.Control
                className="controlproduct"
                type="text"
                placeholder="Category"
                name="category"
                value={product.category}
                onChange={handleChange}
            />
            </Form.Group> */}
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

        {/* <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Example file input"
            className="controlproduct"
                type="text"
                placeholder="Product Image"
                name="productImage"
                value={product.productImage}
                onChange={handleChange} />
            </Form.Group> */}

        {/* history.push("/Admindashboard/Adminproducts") */}
        <Button
          variant="primary"
          type="submit"
          className="Btn-add"
          onClick={() => {
            handleAdd();
            history.push("/Admindashboard/Adminproducts");
          }}
        >
          Add
        </Button>

        <Link to={"/Admindashboard/Adminproducts"}>
          <Button variant="danger" type="submit" className="Btn-add">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Addproduct;
