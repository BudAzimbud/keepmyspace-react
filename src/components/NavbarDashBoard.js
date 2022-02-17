import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import SidebarComponent from './SidebarComponent';
import { connect } from 'react-redux'
import { getProfileUser } from '../actions/ActionUser';


const mapStateToProps = (state) => {
    return {
        profile: state.users.profile,
    }
}


class NavbarDashboardComponent extends Component {

    componentDidMount() {
        this.props.dispatch(getProfileUser())
    }

    logout() {
        localStorage.removeItem('token')
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect g="light" expand="lg">
                    <Container>
                        <SidebarComponent />
                        <Navbar.Brand href="/"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
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
                                <Nav.Link href="/register"><h5>Alfred takoi</h5></Nav.Link>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/login" onClick={this.logout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div >

        );
    }
}

export default connect(mapStateToProps, null)(NavbarDashboardComponent);