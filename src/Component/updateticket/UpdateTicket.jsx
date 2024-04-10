import React from 'react'
import { Button, Form } from 'react-bootstrap'
import PropTypes from "prop-types" 

function UpdateTicket({msg,handleOnChange}) {
  return (
	<div>
	<Form>
		<Form.Label>Reply</Form.Label>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
		<Form.Control
		
        value={msg}
        onChange={handleOnChange}
		as="textarea"
		row="5"
		name="details"/>
		        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>

	</Form>
	</div>
  )
}
UpdateTicket.propTypes={
	msg:PropTypes.string.isRequired,
	handleOnChange:PropTypes.func.isRequired,
	
}

export default UpdateTicket