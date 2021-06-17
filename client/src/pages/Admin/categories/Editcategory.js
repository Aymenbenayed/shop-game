/* eslint-disable no-sparse-arrays */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { edittCategory, getCategory } from "../../../JS/actions/category";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Categories.css";

const EdittCategory = ({ history }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const categoryy = useSelector((state) => state.categoryReducer.category);
    const [category, setCategory] = useState(categoryy);

    useEffect(() => {
        dispatch(getCategory(id));
    }, [dispatch, id]);

    const handleEdit = () => {
        dispatch(edittCategory(categoryy._id, category));
    };

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <Form className="my-form">
            <h1>Update Category</h1>
            {/* Id */}
            <Form.Group controlId="formBasicName">
            <Form.Label>Id of category</Form.Label>
            <Form.Control
                className="controlcategory"
                type="text"
                placeholder={id}
                name="id"
                disabled
            />
            </Form.Group>
            {/* Name */}
            <Form.Group controlId="formBasicName">
            <Form.Label>Name of Category</Form.Label>
            <Form.Control
                className="controlcategory"
                type="text"
                placeholder="Enter category name..."
                name="name"
                value={category.name}
                onChange={handleChange}
            />
            </Form.Group>

            {/* photo */}

            <Form.Group controlId="formBasicName">
            <Form.Label>Image of Category</Form.Label>
            <Form.Control
                className="controlcategory"
                type="text"
                placeholder="Enter category name..."
                name="categoryImage"
                value={category.categoryImage}
                onChange={handleChange}
            />
            </Form.Group>

            <div className="buttons">
            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                are you sure you want to update the category!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                    handleEdit();
                    handleClose();
                    history.push("/Admindashboard/Admincategories");
                    }}
                >
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Link to={"/Admindashboard/Admincategories"}>
                <Button variant="danger" type="submit" className="Btn-cancel">
                Cancel
                </Button>
            </Link>
            </div>
        </Form>
        </div>
    );
    };
export default EdittCategory;
