import React from 'react'
import { Form } from 'react-bootstrap'
import './FiltreByName.css'


const FilterByName = ({ inputSearch, setInputSearch }) => {
  return (
    <div>
    <Form.Control type="text" placeholder="Enter movie name ..."
        className="inputFilter"
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}/>
        
    </div>)}

export default FilterByName