import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import PageBreadcrump from '../../Component/Breadcrump/PageBreadcrump';
import Ticketform from '../../Component/Addticketform/Ticketform';
import Header from '../../Layout/partials/Header';
import Footer from '../../Layout/partials/Footer';

const initialFrmDt = {
	subject: " ",
	issueDate: "",
	detail:"",
  }



function Addticket() {
     const[frmData,setFrmData]=useState(initialFrmDt);


	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFrmData({
			...initialFrmDt,
			[name]:value,
		});
		console.log(name.value);
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
		<PageBreadcrump page="New Ticket" />
		</Col>
	</Row>
	<Row>
		<Col>
		<Ticketform handleOnChange={handleOnChange}
		frmDat={frmData}/>
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

export default Addticket