/* eslint-disable no-sparse-arrays */
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector /* useSelector */ } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams , } from "react-router";
import { editUser, getUser } from "../../../JS/actions/user";
import {Link} from "react-router-dom"
import "./Adminusers.css"

const EditUsers = ({ history }) => {
const { id } = useParams();
const dispatch = useDispatch();

const userr = useSelector((state) => state.showusersReducer.user.userToFind);
const [user, setUser] = useState(userr);

useEffect(() => {
    dispatch(getUser(id));
    }, [dispatch, id]);

const handleEdit = () => {
    dispatch(editUser(userr._id, user))
    };  

const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
<div>

    <Form className="my-form">
        <h1>Update User</h1>
                    {/* Id */}
        <Form.Group controlId="formBasicName">
            <Form.Label>Id of user</Form.Label>
            <Form.Control
                className="controlid"
                type="text"
                placeholder={id}
                name="id"
                disabled/>
        </Form.Group>
                    {/* Name */}
        <Form.Group controlId="formBasicName">
            <Form.Label>Role of user</Form.Label>
            <Form.Control
                className="controluser"
                type="number"
                placeholder="Enter role of user"
                name="role"
                value={user?.role}
                onChange={handleChange}/>
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
                are you sure you want to update user!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                        handleEdit();handleClose();
                        history.push("/Admindashboard/Adminusers");}}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                        handleEdit();handleClose();
                        history.push("/Admindashboard/Adminusers");}}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
            
        <Link to={"/Admindashboard/Adminproducts"}>
                <Button variant="danger" type="submit"  className="Btn-cancel">Cancel</Button>
        </Link>
        </div>
        

    </Form>
</div>

);};

export default EditUsers ;