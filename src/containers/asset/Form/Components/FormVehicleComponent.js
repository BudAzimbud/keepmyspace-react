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


const mapStateToProps = (state) => {

    let detail = {}

    if (state.assets.getAssetResponse) {
        detail = {
            detailbrand: state.assets.getAssetResponse.detail.detailbrand,
            detailkindvehicle: state.assets.getAssetResponse.detail.detailkindvehicle,
            detailnumberplat: state.assets.getAssetResponse.detail.detailnumberplat,
            detailnumbermachine: state.assets.getAssetResponse.detail.detailnumbermachine
        }
    }


    return {
        initialValues: {
            assetName: state.assets.getAssetResponse.assetName,
            value: state.assets.getAssetResponse.value,
            note: state.assets.getAssetResponse.note,
            ...detail
        },
    }
}



class FormVehiceComponent extends Component {



    getKindVehicle() {
        if (this.props.initialValues) {
            return this.props.initialValues.detailkindvehicle
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

                    <Form.Group controlId="formBasicEmail">
                        <Field
                            name="detailkindvehicle"
                            component={renderSelect}
                            options={["Motor", "Mobil"]}
                            title={"Jenis Kendaraan"}
                            selectedOption={this.getKindVehicle()}
                        />
                    </Form.Group>


                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            name="detailbrand"
                            component={renderField}
                            placeholder="Merek Kendaraan..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            name="detailnumberplat"
                            component={renderField}
                            placeholder="Plat Nomer..."
                        />
                    </Form.Group>

                    <Form.Group className="" controlId="formBasicEmail">
                        <Field
                            name="detailnumbermachine"
                            component={renderField}
                            placeholder="Nomor Mesin..."
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

FormVehiceComponent = reduxForm({
    form: "assetVehicle",
    validate: ValidateFormAsset,
    enableReinitialize: true,
})(FormVehiceComponent);

export default connect(mapStateToProps, null)(FormVehiceComponent);