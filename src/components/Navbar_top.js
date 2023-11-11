import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search-icon.png'
import '../index.css'
import Navigation from './Navigation'
function Navbar_one () {
  return (
    <>
      {[false].map(expand => (
        <Navbar
          key={expand}
          //   bg='light'
          expand={expand}
          className='mbss'
        >
          <div className='containerSet'>
            <div className='brandSearch'>
              <Navbar.Brand href='#'>
                <img
                  style={{ width: '185px', height: 'auto' }}
                  src={logo}
                  alt='Logo'
                />
              </Navbar.Brand>
              <Navbar.Brand>
                <Form className='d-flex'>
                  <InputGroup style={{ width: '25em' }}>
                    <InputGroup.Text
                      style={{ padding: 'inherit', paddingLeft: '6px' }}
                      className='bg-white'
                    >
                      <img
                        style={{ width: '30px', height: 'auto' }}
                        src={search}
                        alt='Logo'
                      />
                    </InputGroup.Text>
                    <FormControl
                      type='search'
                      className='me-2 custom-input'
                      placeholder='Search'
                    />
                  </InputGroup>
                </Form>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Hey Book your slot !
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link href='#action1'>New</Nav.Link>
                  <Nav.Link href='#action2'>MyTickets</Nav.Link>
                  <NavDropdown
                    title='Dropdown'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href='#action3'>Help</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>Rewards</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action5'>
                      Notification
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
          <Navigation />
        </Navbar>
      ))}
    </>
  )
}

export default Navbar_one
