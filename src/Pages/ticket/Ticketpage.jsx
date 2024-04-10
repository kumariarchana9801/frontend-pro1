import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import PageBreadcrump from '../../Component/Breadcrump/PageBreadcrump'
import ticket from '../../assets/data/dummy.json';
import MessageHistory from '../../Component/Messagehistory/MessageHistory';
import UpdateTicket from '../../Component/updateticket/UpdateTicket';
import Header from '../../Layout/partials/Header';
import Footer from '../../Layout/partials/Footer';
import { useNavigate } from 'react-router-dom';

 const tickets=ticket[0];
 
function Ticketpage() {
	const navigate = useNavigate();
	const[message,setMessage]=useState('')
	useEffect(() => {},[message]);
	const handleOnChange=e=>{
		setMessage(e.target.value)
	}
  return (
	<>
	 <div className="default-layout">
		<header className="header mb-2">
        <Header/>
      </header>
	<Container>
		<Row>
			<Col>
			<PageBreadcrump page="Ticket"/>
			</Col>
		</Row>
		<Row>
			<Col  className="text-weight-bolder text-secondary">
			 <div className='subject'>Subject:{ticket.subject}</div> 
			<div className='date'>Ticket Opened:{ticket.addedAt}</div>
			<div className='status'>Status:{ticket.status}</div>
			</Col>
			<Col className='text-right'>
			<Button varient="outline-info" onClick={()=>navigate('/dashboard')}>
              Close Ticket
			</Button>
			</Col>
		</Row>
		<Row  className="mt-4"> 
			<Col>
			<MessageHistory msg={ticket.history}/>
         </Col>
		</Row>
		<hr/>
		<Row className='mt-4'>
			<Col>
            <UpdateTicket msg={message} handleOnChange={handleOnChange}/>
			</Col>
		</Row>
	</Container>
	<footer className="footer">
	<Footer/>
  </footer>
  </div>
  </>
  )
}

export default Ticketpage;