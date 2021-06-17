import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../JS/actions/category";

const Addcategory = ({ history }) => {
  const [category, setCategory] = useState({ name: "", categoryImage:"" , parentId:"" });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(createCategory(category));
  };

  return (
        <div className="addcategory">
        <Form>
                    {/* id */}
        <Form.Group controlId="formBasicName">
            <Form.Label>Id of category</Form.Label>
            <Form.Control
                className="controlid"
                type="text"
                placeholder="id"
                name="id"
                disabled/>
        </Form.Group>
                        {/* name */}
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name of Category</Form.Label>
            <Form.Control
                type="text"
                placeholder="name"
                name="name"
                value={category.name}
                onChange={handleChange}
            />
            </Form.Group>
                        {/* Image */}
            <Form.Group controlId="formBasicName">
            <Form.Label>Image of Category</Form.Label>
            <Form.Control
                className="controlcategory"
                type="text"
                placeholder="Enter category image..."
                name="categoryImage"
                value={category.categoryImage}
                onChange={handleChange}/>
        </Form.Group>


            <Button
            variant="primary"
            type="submit"
            className="Btn-add"
            onClick={() => {
                handleAdd();
                history.push("/Admindashboard/Admincategories")}}>
            Add</Button>

            <Button
            variant="danger"
            type="submit"
            className="Btn-add"
            onClick={() => {
                history.push("/Admindashboard/Admincategories");}}>
            Cancel
            </Button>
        </Form>
        </div>
    );
};

export default Addcategory;