import React, { useState,useEffect } from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import PageBreadcrump from '../../Component/Breadcrump/PageBreadcrump'
import { Link } from 'react-router-dom'
import SearchForm from '../../Component/Searchform/SearchForm'
import Tickettable from '../../Component/Ticket-table/Tickettable'
import ticket from '../../assets/data/dummy.json';
import Footer from '../../Layout/partials/Footer'
import Header from '../../Layout/partials/Header'
import { useNavigate } from 'react-router-dom';

function TicketListpage() {
  const navigate = useNavigate();
	const [str,setStr]=useState("")
  const[displayTicket,setDisplayTicket]=useState(ticket);

	useEffect(()=>{
  },[str,displayTicket])

	const handleOnChange=e=>{
		
    const {value}=e.target.value;
    setStr(value);
    searchTicket(value);
	};
  const searchTicket =sttr=>{
    const displayTicket=ticket.filter(row=> row.subject.tiLowerCase().includes(sttr).toLowerCase())
  
    setDisplayTicket(displayTicket)
  
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
			<PageBreadcrump page="Ticket Lists"/>
			</Col>
		</Row>
		<Row className="mt-4">
        <Col>
          
            <Button variant="info"  onClick={()=>navigate('/add-ticket')}>Add New Ticket</Button>
          
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Tickettable ticket={displayTicket }/>
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

export default TicketListpage