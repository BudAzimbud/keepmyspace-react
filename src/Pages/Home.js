import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import './Home.css'
class HomePage extends Component {

    render() {
        return (
            <div class="navbar-home">
                <Navbar collapseOnSelect >
                    <Container>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link href="/">
                                    <Button variant="outline-primary">
                                        Contact Us
                                    </Button>
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/register">
                                    <Button >Get Started</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        );
    }
}

export default HomePage;