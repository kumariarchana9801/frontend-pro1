import React from 'react'
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import Tickettable from '../../Component/Ticket-table/Tickettable';
import ticket from '../../assets/data/dummy.json';
import PageBreadcrump from '../../Component/Breadcrump/PageBreadcrump';
import Header from '../../Layout/partials/Header'
import Footer from '../../Layout/partials/Footer';
import { useNavigate } from 'react-router-dom';


function Dashboardpage() {
	const navigate = useNavigate();
	return (
		<>
		 <div className="default-layout">
		<header className="header mb-2">
        <Header />
      </header>
		<Container>
			 <Row>
        <Col>
          <PageBreadcrump page="Dashboard" />
        </Col>
      </Row>
			<Row>
				<Col className="text-center mt-5 mb-2">
					<Button
						variant="info"
						style={{ fontSize: "1rem", padding: "10px 30px" }}
					 onClick={()=>navigate('/add-ticket')}>Add New Ticket</Button>
				</Col>
			</Row>
			<Row>
				<Col className="text-center  mb-2">
				<div>Total tickets: 500</div>
          <div>Pending tickets:50 </div>
				</Col>
			</Row>
			<hr/>
			<Row>
				<Col className="mt-2">Recently Added Ticket</Col>
			</Row>
			<Row>
				<Col className="recent-ticket">
					<Tickettable ticket={ticket}/>
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

export default Dashboardpage