import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Form, FormControl, Button } from 'react-bootstrap'

class NavbarHomeComponent extends Component {

    render() {
        return (
            <Navbar collapseOnSelect g="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">KEEP MY SPACE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/feature">Features</Nav.Link>
                            <Nav.Link href="/prices" >Pricing</Nav.Link>
                            <Form className="d-flex">
                                <FormControl
                                    size="sm"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <Button variant="outline-secondary">Search</Button>
                            </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/register"><h5>Register</h5></Nav.Link>
                            <Nav.Link eventKey={2} href="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarHomeComponent;