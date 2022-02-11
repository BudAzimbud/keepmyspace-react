import React, { Component } from 'react';
import RegisterFormComponent from '../components/RegisterFormComponent';
import { Container, Col } from 'react-bootstrap'
import registerImage from '../images/registerImage.svg'
import { connect } from "react-redux";
import { createUser } from '../actions/ActionUser';
import './RegisterPage.css'

import Swal from 'sweetalert2'

const mapStateToProps = (state) => {
    return {
        createUserResponse: state.users.createUserResponse,
        createUserError: state.users.createUserError
    }
}
class RegisterPages extends Component {


    handleSubmit(data) {
        this.props.dispatch(createUser(data))
    }

    render() {
        if (this.props.createUserResponse.data) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }


        return (
            <div className="register-container">

                <Container >
                    <h2>Join With Us</h2>
                    <div className='d-flex justify-content-center'>
                        <img src={registerImage} width='100' className="mt-4" alt="image" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Col xs lg={5} >
                            <RegisterFormComponent onSubmit={(data) => { this.handleSubmit(data) }} />
                        </Col>
                    </div>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(RegisterPages);