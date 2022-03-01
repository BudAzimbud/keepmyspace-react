import React, { useState } from 'react'
import { Offcanvas, Button, Row, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
function SidebarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='sidebar-menu'>
            <Button variant="outline-light border-0" onClick={handleShow}>
                KEEP MY SPACE
            </Button>

            <Offcanvas show={show} onHide={handleClose} bg="dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Navbar.Brand href="/dashboard">KEEP MY SPACE</Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Nav.Link href="/">home</Nav.Link>
                    </Row>
                    <Row>
                        <Nav.Link href="/dashboard">Keluarga</Nav.Link>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SidebarComponent