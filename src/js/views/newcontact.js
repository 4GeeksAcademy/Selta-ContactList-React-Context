import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const NewContact = props => {
	
    const { store, actions } = useContext(Context);
	const params = useParams ();


    
   return (
    
       <form>
            <div className="form-group col-4">
                <label for="inputName">Full Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter full name"></input>
            </div>
            <div className="form-group col-4">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address"></input>
            </div>
            <div className="form-group col-4">
                <label for="inputPhone">Phone</label>
                <input type="number" className="form-control" id="inputPhone" placeholder="Enter phone number"></input>
            </div>
            <div className="form-group col-4">
                <label for="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {store.contact[params.theid].form}
       </form>
    
   )
   
}

NewContact.propTypes = {
	match: PropTypes.object
};