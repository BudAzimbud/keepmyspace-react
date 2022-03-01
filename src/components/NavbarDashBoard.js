import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import SidebarComponent from './SidebarComponent';
import { connect } from 'react-redux'
import { getProfileUser } from '../actions/ActionUser';
import Avatar from 'react-avatar';

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

            this.props.profile ? <div>
                <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                    <Container>
                        <SidebarComponent />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
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
                            <h5 className='mt-3' style={{ color: 'white' }}>{this.props.profile.fullName}</h5>
                            <Nav>

                                <Dropdown>
                                    <Avatar size="50" facebook-id="invalidfacebookusername" src={this.props.profile.image.url} round={true} />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="/login" onClick={this.logout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div > : null


        );
    }
}

export default connect(mapStateToProps, null)(NavbarDashboardComponent);