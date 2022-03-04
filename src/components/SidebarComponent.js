import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import './SideBarComponent.css'
import { Link } from 'react-router-dom'
import { FiHome, FiLogOut } from "react-icons/fi";

function SidebarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <button className="button-toggle" onClick={handleShow}>
                KEEP MY SPACE
            </button>

            <Offcanvas show={show} className="sidebar-menu" onHide={handleClose}>
                <Offcanvas.Header closeButton className='border'>
                    <h5> KEEP MY SPACE</h5>
                </Offcanvas.Header>
                <Offcanvas.Body className="menu">

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SidebarComponent