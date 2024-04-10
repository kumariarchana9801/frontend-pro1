import React from 'react'
import { Button, Card, Col, Form, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Ticketform({ handleOnSubmit,handleOnChange,frmDt}) {
	const navigate = useNavigate();
	
	return (
		<Card style={{ width: '40rem',height:"16rem",marginRight:'10' }}>
			<Form autoComplete="off" onSubmit={handleOnSubmit}>
				<Form.Group  as={Row}>
					<Form.Label column sm={3}>Subject</Form.Label>
					<Col sm={9}>
					<Form.Control
						type="subject"
						name="email"
					    // value={frmDt.subject}
						onChange={handleOnChange}
						placeholder="Subject"
						required
					/></Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column sm={3}> Issue Found</Form.Label>
					<Col sm={9}>
						<Form.Control
							type="date"
							name="issueDate"
						// value={frmDt.issueDate}
							onChange={handleOnChange} 
							required/>
					</Col>
				</Form.Group>
				<Form.Group>
					<Form.Label>Details</Form.Label>
					<Form.Control
						as="textarea"
						name="details"
						//value={frmDt.details}
						row="5"
						onChange={handleOnChange}
						required />
				</Form.Group>
				<br />
				<Button type="submit" variant="info" block onClick={()=>navigate('/ticket/:id')}>Open Ticket</Button>

			</Form>
		</Card>
	)
}

export default Ticketform