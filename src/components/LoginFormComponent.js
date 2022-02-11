import React, { Component } from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap'
import avatar from '../images/avatar.svg'

import { reduxForm, Field } from "redux-form";



const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <h1 htmlFor="{input}" className="col-form-label">
                {label}
            </h1>
        </Col>
        <Col md="12">
            <Form.Control {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly} />
            {touched &&
                ((error && <p className="mb-0" style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>

)

class LoginFormComponent extends Component {

    render() {
        return (
            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <img src={avatar} width={100} alt='avatar login' />
                </div>
                <form onSubmit={this.props.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Field
                            type="email"
                            name="email"
                            component={renderField}
                            placeholder="Email"
                        />
                    </Form.Group>


                    <Form.Group className="" controlId="formBasicPassword">
                        <Field
                            type="password"
                            name="password"
                            component={renderField}
                            placeholder="Password"
                        />
                    </Form.Group>


                    <Button variant="primary" className='mt-4' type="submit" disabled={this.props.isLoading} >
                        {this.props.isLoading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Register</span>
                            </Spinner> : <span>Login</span>}
                    </Button>


                    <Form.Group className="mt-5" controlId="formBasicEmail">
                        <a href="/forget-password">Forget Password</a>
                    </Form.Group>

                </form>
            </div>
        );
    }
}

LoginFormComponent = reduxForm({
    form: "login",
    enableReinitialize: true,
})(LoginFormComponent);

export default LoginFormComponent;