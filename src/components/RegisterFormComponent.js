import React, { Component } from 'react'

import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import { reduxForm, Field } from "redux-form";
import RegisterValidation from '../validate/registerValidate';
import normalizePhone from '../validate/normalizePhone';

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


class RegisterFormComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Field
                            type="email"
                            name="email"
                            component={renderField}
                            placeholder="Email"
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="fullName"
                            component={renderField}
                            placeholder="Nama Lengkap"
                        />
                    </Form.Group>


                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="phoneNumber"
                            component={renderField}
                            normalize={normalizePhone}
                            placeholder="Nomer Telpon"
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="password"
                            name="password"
                            component={renderField}
                            placeholder="Password"
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="password"
                            name="passwordConfirm"
                            component={renderField}
                            placeholder="ConfirmPassword"
                        />
                    </Form.Group>



                    <Button variant="primary" className='mt-4' type="submit" disabled={this.props.isLoading} >
                        {this.props.isLoading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Register</span>
                            </Spinner> : <span>Register</span>}
                    </Button>

                    <Form.Group className="" controlId="formBasicEmail">
                        <p className='mt-3'>Sudah ada Akun ? <a href="/login">Login</a></p>
                    </Form.Group>

                </form>
            </div>
        )

    }


}

RegisterFormComponent = reduxForm({
    form: "register",
    validate: RegisterValidation,
    enableReinitialize: true,
})(RegisterFormComponent);
export default RegisterFormComponent