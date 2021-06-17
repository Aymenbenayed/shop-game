/* eslint-disable no-sparse-arrays */
import {Button, Form} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {editUser} from '../../JS/actions/user'
import './EditUser.css'



const EditUser = ({history}) => { 

    const userEdit = useSelector(state => state.userReducer.user)
    const [user, setUser] = useState({ name:"" , pseudo:"" , email:"" , phone: 0 , password:"" , adress:""})
    useEffect(() => {
        setUser(userEdit) 
        }
    ,[user,userEdit]) 

    const dispatch = useDispatch()
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value })
    }
    return (
        <Form className="my-form">
        {/*input name*/ }
        <Form.Group controlId="formBasicName">
            <Form.Control type="Name" 
            placeholder="Enter User name..." 
            name="name"
            value={user.name}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Name is required!</Form.Text>
        </Form.Group>
        {/* input pseudo */}
        <Form.Group controlId="formBasicpseudo">
            <Form.Control type="text" 
            placeholder="enter User pseudo..." 
            name="pseudo"
            value={user.pseudo}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Pseudo</Form.Text>
        </Form.Group>
            {/* input email */}
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="Email" 
            placeholder="enter User email..."
            name="email"
            value={user.email}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Email is required!</Form.Text>
        </Form.Group>
            {/* input phone */}
        <Form.Group controlId="formBasicphone">
            <Form.Control type="Number" 
            placeholder="enter User phone..." 
            name="phone"
            value={user.phone}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Phone</Form.Text>
        </Form.Group>
            {/* input password */}
        <Form.Group controlId="formBasicpassword">
            <Form.Control type="Password" 
            placeholder="enter User password..." 
            name="password"
            value={user.password}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Password</Form.Text>
        </Form.Group>
            {/* input Adress */}
        <Form.Group controlId="formBasicAdress">
            <Form.Control type="text" 
            placeholder="enter User adress..." 
            name="adress"
            value={user.adress}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Adresse</Form.Text>
        </Form.Group>
                
                <Button variant="primary" type="submit"  className="Btn-add"
                onClick={()=> {dispatch(editUser(user._id, user)); history.push("/profile")} }>
                Update
            </Button>
</Form>                
)}

export default EditUser