import React, { useState } from 'react'
import { Offcanvas, Button, Row, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './SideBarComponent.css'
function SidebarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button variant="outline-light border-0" onClick={handleShow}>
                KEEP MY SPACE
            </Button>

            <Offcanvas show={show} className="sidebar-menu" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Navbar.Brand className="title-sidebar" >KEEP MY SPACE</Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Nav.Link href="/" className='menu'>Home</Nav.Link>
                    </Row>
                    <Row>
                        <Nav.Link href="/dashboard" className='menu'>Keluarga</Nav.Link>
                    </Row>
                    <Row>
                        <Nav.Link href="/logout" className='menu' onClick={() => {
                            localStorage.removeItem('token')
                        }}>Logout</Nav.Link>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SidebarComponent