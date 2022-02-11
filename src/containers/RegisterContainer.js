import React, { useState } from 'react';
import RegisterFormComponent from '../components/RegisterFormComponent';
import { Container, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import { createUser } from '../actions/ActionUser';
import './RegisterPage.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



const mapStateToProps = (state) => {
    return {
        createUserResponse: state.users.createUserResponse,
        createUserError: state.users.createUserError
    }
}
function RegisterContainer(props) {
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (data) => {
        props.dispatch(createUser(data));
        setIsLoading(true)
    }



    if (props.createUserResponse.data) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        history('/login', { state: true })

    }

    if (props.createUserError.statusCode === 409) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'coba pake email lain',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        setTimeout(() => {
            window.location.reload();
        }, 2000)

    }


    return (
        <div className="register-container">
            <Container >
                <h2>Join With Us</h2>
                <div className='d-flex justify-content-end'>
                    <h2>Keep your family</h2>
                    <hr></hr>
                    <p>with KEEP MY SPACE</p>
                </div>
                <div className='d-flex justify-content-end'>
                    <Col xs lg={5} >
                        <RegisterFormComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />
                    </Col>
                </div>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, null)(RegisterContainer);