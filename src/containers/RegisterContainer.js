import React, { useState } from 'react';
import RegisterFormComponent from '../components/RegisterFormComponent';
import { Container, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import { createUser } from '../actions/ActionUser';
import './RegisterPage.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import NavbarHomeComponent from '../components/NavbarHomeComponent';

const mapStateToProps = (state) => {

    console.log(state.users.createUserResponse)

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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Check Your Email'
        })
        history('/login', { state: true })

    }

    if (props.createUserError.statusCode === 409) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'coba pake email lain',
        })
        setTimeout(() => {
            window.location.reload();
        }, 2000)

    }



    return (
        <div className="register-container">
            <NavbarHomeComponent />
            <Container >
                <h2>Mulai Bergabung </h2>
                <div className='d-flex justify-content-end'>
                    <h2>Jaga Keluarga Anda </h2>
                    <hr></hr>
                    <p>bersama KEEP MY SPACE</p>
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