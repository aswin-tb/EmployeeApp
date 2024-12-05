import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="custom-dark-navbar">
      <Container>
        <Navbar.Brand className='text-white'>Employee App</Navbar.Brand>
      </Container>
    </Navbar>
  </>
  
  )
}

export default Header