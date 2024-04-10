import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import { PropTypes } from 'prop-types';

function SearchForm({str}) {
	const handleOnChange = (e) => {
		const { value } = e.target
	};
  return (
	<div><Form>
	<Form.Group as={Row}>
	  <Form.Label column sm="3">
		Search:
	  </Form.Label>
	  <Col sm="9">
		<Form.Control
		  name="searchStr"
		  onChange={handleOnChange}
		//   value={str}
		  placeholder="Search...."
		/>
	  </Col>
	</Form.Group>
  </Form></div>
  )
}
SearchForm.propTypes={
	handleOnChange:PropTypes.func.isRequired,
	str:PropTypes.string.isRequired
}

export default SearchForm