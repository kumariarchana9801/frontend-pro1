import React from 'react'
import PropTypes from 'prop-types';
import { Container ,Row,Col, Spinner, Form, Alert, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function  Passwordreset({handleOnChange,handleOnResetSubmit,formSwitcher,email}) {
 const navigate=useNavigate();
  return (
	<div>
		<Container>
			<Row>
				<Col>
					<h2 className="text-info text-center">Password reset</h2>
					<hr />
					<Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                      <br/>
	                  <Button type="submit">Login</Button>
						
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				 <Col>
					<button ><a onClick={()=>navigate('/login')} >Login Now</a></button>
				</Col>
			</Row>
     
			
		</Container>
	</div>
	
  )
}
Passwordreset.propTypes = {
      handleOnChange:PropTypes.func.isRequired,
      formSwitcher:PropTypes.func.isRequired,
     handleOnResetSubmit:PropTypes.func.isRequired,
	  email:PropTypes.string.isRequired,
	 
};

export default Passwordreset