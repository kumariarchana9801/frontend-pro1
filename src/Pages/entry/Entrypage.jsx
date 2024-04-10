import React, { useState } from 'react'
import { Card, Navbar } from 'react-bootstrap'
import './entry.css';
import Login from '../../Component/login/Login'
import Passwordreset from '../../Component/password/Passwordreset'
import Footer from '../../Layout/partials/Footer';


function Entrypage({}) {
	const [email,setEmail]=useState('');
	const[password,setPassword]=useState('');
	const [frmLoad, setFrmLoad] = useState("login");
	

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};
	const handleOnSubmit = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Fill up all the form!");
		}
	}
	const handleOnResetSubmit = async (e) => {
		e.preventDefault();

		if (!email) {
			return alert("Please enter the email!");
			console.log(email);
		}
		
	}
	const formSwitcher = (frmType) => {
		setFrmLoad(frmType);
	};
  return (
	<>
	 <Navbar  collapseOnSelect bg="info" variant="dark" expand="md">
	 <Navbar.Brand>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ib0FP6xcjDUpjMajcvW6ajYXz887kSTGGor9evfy_g&s' alt=''></img>
      </Navbar.Brand>
	  </Navbar>
	<div className="entry-page">
		<Card  style={{ width: '35rem'}} className="form-box">
		<Card.Body>
		{frmLoad === "login" && <Login handleOnChange={handleOnChange}
		handleOnSubmit={handleOnSubmit}
		formSwitcher={formSwitcher}
		email={email}
		password={password}
		/>}
		{frmLoad === "rest" && <Passwordreset handleOnChange={handleOnChange}
		formSwitcher={formSwitcher}
		handleOnResetSubmit={handleOnResetSubmit}
		email={email}
		
		
		/>}
		</Card.Body>


		</Card>
	</div>
	<footer className="footer">
        <Footer/>
         </footer> 
	</>
  )
}

export default Entrypage