import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import JumbrotonComponent from '../components/JumbrotonComponent';
import CardPriceComponent from '../components/CardPriceComponent'
import NavbarHomeComponent from '../components/NavbarHomeComponent';
import './Home.css'
class HomeContainer extends Component {

    render() {
        return (
            <div >
                <NavbarHomeComponent />

                <Navbar className="navbar-home" collapseOnSelect >
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

                <JumbrotonComponent />
                <Container >
                    <CardPriceComponent />

                </Container>

            </div>

        );
    }
}

export default HomeContainer;