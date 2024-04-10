import React from 'react'
import { Navbar, Nav, NavbarCollapse, NavbarToggle, NavbarBrand, NavLink } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar  collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ib0FP6xcjDUpjMajcvW6ajYXz887kSTGGor9evfy_g&s' alt=''></img>
      </Navbar.Brand>
      <NavbarToggle aria-controls='basic-navbar-nav'/>
      <NavbarCollapse id='basic-navbar-nav'>
        <Nav className="ml-auto">
        <NavLink  onClick={()=>navigate('/dashboard')}>DashBoard</NavLink>
         <NavLink  onClick={()=>navigate('/ticket')}>Tickets</NavLink>
          <NavLink onClick={()=>navigate('/logout')}>Logout</NavLink>
        </Nav>

      </NavbarCollapse>
    </Navbar>
  )
}

export default Header