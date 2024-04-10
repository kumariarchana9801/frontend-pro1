import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Container ,Row,Col, Spinner, Form, Alert, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Register({handleOnChange, handleOnSubmit ,fromSwitcher,email,password,name}) {


	const navigate = useNavigate();
  return (
	<>
	 
	<div>
		
		<Container>
			<Row>
				<Col>
					<h2 className="text-info text-center">Register</h2>
					<hr />
					 {/* <Alert variant="danger">error</Alert> */}
					<Form autoComplete="off" onSubmit={handleOnSubmit}>
					<Form.Group>
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="name"
								name="name"
								value={name}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								 value={password}
								onChange={handleOnChange}
								placeholder="password"
								required
							/>
						</Form.Group>
                      <br/>
	                  <Button type="submit" onClick={()=>navigate('/dashboard')}>Register</Button>
						
					</Form>
					<hr />
				</Col>
			</Row>

			
			
			
		</Container>
	</div>
	
	</>
  )
}
Register.propTypes = {
      handleOnChange:PropTypes.func.isRequired,
	  handleOnSubmit:PropTypes.func.isRequired,
	  formSwitcher:PropTypes.func.isRequired,
	  email:PropTypes.string.isRequired,
	  password:PropTypes.string.isRequired,
};

export default Register