import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Container ,Row,Col, Spinner, Form, Alert, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Login({handleOnChange, handleOnSubmit ,fromSwitcher,email,password}) {


	const navigate = useNavigate();
  return (
	<>
	 
	<div>
		
		<Container>
			<Row>
				<Col>
					<h2 className="text-info text-center">Client Login</h2>
					<hr />
					 {/* <Alert variant="danger">error</Alert> */}
					<Form autoComplete="off" onSubmit={handleOnSubmit}>
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
	                  <Button type="submit" onClick={()=>navigate('/dashboard')}>Login</Button>
						
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<button><a onClick={()=>navigate('/pass')}  >Forget Password?</a></button>
				</Col>
			</Row>
			<Row className="py-4">
				<Col>
					Are you new here? <button><a onClick={()=>navigate('/register')} >Register Now</a></button>
				</Col>
			</Row>
		</Container>
	</div>
	
	</>
  )
}
Login.propTypes = {
      handleOnChange:PropTypes.func.isRequired,
	  handleOnSubmit:PropTypes.func.isRequired,
	  formSwitcher:PropTypes.func.isRequired,
	  email:PropTypes.string.isRequired,
	  password:PropTypes.string.isRequired,
};

export default Login