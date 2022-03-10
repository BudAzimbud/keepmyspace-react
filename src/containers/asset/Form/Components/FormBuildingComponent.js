import React, { Component } from 'react'

import { Row, Col, Form, Button, Spinner } from "react-bootstrap";

import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux'
import ValidateFormAsset from '../../../../validate/validateFormAsset';
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


const renderSelect = ({
    input,
    label,
    options,
    selectedOption,
    readOnly,
    title,
    meta: { touched, error, warning },
}) => (
    <Row>
        <Col md="12">
            <h1 htmlFor="{input}" className="col-form-label">
                {label}
            </h1>
        </Col>
        <Col md="12">
            <Form.Select
                aria-label="Default select example"
                onChange={input.onChange}
            >
                {options.map((opt) => (
                    <option value={opt} selected={opt === selectedOption}>{opt}</option>
                ))}
            </Form.Select>
            {touched &&
                ((error && <p className="mb-0" style={{ color: "red" }}>{error}</p>) ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>))}
        </Col>
    </Row>

)

const mapStateProps = (state) => {


    if (state.assets.getAssetResponse) {
        return {
            initialValues: {
                assetName: state.assets.getAssetResponse.assetName,
                value: state.assets.getAssetResponse.value,
                note: state.assets.getAssetResponse.note,
                detailcertification: state.assets.getAssetResponse.detail.detailcertification,
                detailsizeSoil: state.assets.getAssetResponse.detail.detailsizeSoil,
                detailsizeBuilding: state.assets.getAssetResponse.detail.detailsizeBuilding,
                detailaddress: state.assets.getAssetResponse.detail.detailaddress,
                detailpaid: state.assets.getAssetResponse.detail.detailpaid
            },
        };
    }


};


const option = ["Lunas", "Belum Lunas"]

class FormBuildingComponent extends Component {

    getDetailPaid() {
        if (this.props.initialValues) {
            return this.props.initialValues.detailpaid
        }
        return null
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Field
                            type="text"
                            name="assetName"
                            component={renderField}
                            placeholder="Nama Harta..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            type="number"
                            name="value"
                            component={renderField}
                            placeholder="Harga.."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            as="textarea"
                            name="note"
                            component={renderField}
                            placeholder="Catatan..."
                        />
                    </Form.Group>

                    <Form.Group >
                        <Field
                            name="detailcertification"
                            component={renderField}
                            placeholder="Nomor Sertifikat Tanah"
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            name="detailsizeSoil"
                            component={renderField}
                            placeholder="Luas Tanah..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            name="detailsizeBuilding"
                            component={renderField}
                            placeholder="Luas bangunan..."
                        />
                    </Form.Group>

                    <Form.Group >
                        <Field
                            as="textarea"
                            name="detailaddress"
                            component={renderField}
                            placeholder="Alamat..."
                        />
                    </Form.Group>

                    <Form.Group >
                        <Field
                            name="detailpaid"
                            component={renderSelect}
                            options={
                                option
                            }
                            title="Pelunasan"
                            value={"value"}
                            selectedOption={this.getDetailPaid()}

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
        );
    }
}

FormBuildingComponent = reduxForm({
    form: "assetBuilding",
    validate: ValidateFormAsset,
    enableReinitialize: true,
})(FormBuildingComponent);

export default connect(mapStateProps, null)(FormBuildingComponent);