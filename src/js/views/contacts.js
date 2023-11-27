import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {actions.getAgenda()},  []);
	

	return (
		<div className="container">
			<div className="card" >
				<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						
						<li key={index}
							className="list-group-item d-flex ">	
							
							<div className="d-flex align-items-center">
								<div className="mx-3"> <img className="card-img-left" src="https://placehold.co/50x50" alt="Card image cap"></img> </div>
								<div clasName="flex-column">
									<strong > {item.full_name} </strong>		
									<p className="text-primary" > {item.address} </p>
								</div>
							</div>				
						</li>
					);
				})}
			</ul></div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};



