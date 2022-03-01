import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ButtonHome() {
    return (
        <div>
            <Link to={"/dashboard"} className >
                <Button variant="dark">Kembali</Button>
            </Link>
        </div>
    )
}

export default ButtonHome