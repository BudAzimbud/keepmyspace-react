import React, { Component } from 'react'

import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import { reduxForm, Field } from "redux-form";
import TenantValidation from '../validate/tenantValidate';
import { connect } from 'react-redux'
const renderField = ({
    input,
    type,
    as,
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
            <Form.Control {...input} type={type} as={as} placeholder={placeholder} disabled={disabled} readOnly={readOnly} />
            {touched &&
                ((error && <p className="mb-0" style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>

)


const options = [
    {
        label: "Apple",
        value: "apple",
    },
    {
        label: "Mango",
        value: "mango",
    },
    {
        label: "Banana",
        value: "banana",
    },
    {
        label: "Pineapple",
        value: "pineapple",
    },
];
const renderSelect = ({
    input,
    label,
    option,
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
            <Form.Select aria-label="Default select example" onChange={input.onChange}>
                <option>Open this select menu</option>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </Form.Select>
            {touched &&
                ((error && <p className="mb-0" style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>

)


const mapStateProps = (state) => {
    return {
        initialValues: {
            nameTenant: state.tenants.findTenantResponse.nameTenant,
            city: state.tenants.findTenantResponse.city,
            province: state.tenants.findTenantResponse.province,
            address: state.tenants.findTenantResponse.address,
            postalCode: state.tenants.findTenantResponse.postalCode,
        },
    };
};




class TenantFormComponent extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="nameTenant"
                            component={renderField}
                            placeholder="Keluarga.."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="city"
                            component={renderField}
                            placeholder="Kota.."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="province"
                            component={renderField}
                            placeholder="Provinsi..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            as="textarea"
                            name="address"
                            component={renderField}
                            placeholder="Alamat..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="number"
                            name="postalCode"
                            component={renderField}
                            placeholder="Kode Pos..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="timeZone"
                            component={renderSelect}
                        />
                    </Form.Group>


                    <Button variant="primary" className='mt-4' type="submit" disabled={this.props.isLoading} >
                        {this.props.isLoading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Simpan</span>
                            </Spinner> : <span>Simpan</span>}
                    </Button>

                </form>
            </div>
        )

    }


}

TenantFormComponent = reduxForm({
    form: "register",
    validate: TenantValidation,
    enableReinitialize: true,
})(TenantFormComponent);
export default connect(mapStateProps, null)(TenantFormComponent)