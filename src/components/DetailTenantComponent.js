import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import ButtonHome from './ButtonHome';

const mapStateProps = (state) => {
    return {
        tenantDetail: state.tenants.findTenantResponse,
    };
};

function DetailTenantComponent(props) {
    console.log(props)

    return (
        <div>
            <Container>
                <Row>
                    <ButtonHome />
                </Row>
                <Row>
                    <Table >
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Keluarga</td>
                                <td>{props.tenantDetail.nameTenant}</td>
                            </tr>
                            <tr>
                                <td>Provinsi</td>
                                <td>{props.tenantDetail.province}</td>
                            </tr>

                            <tr>
                                <td>Alamat</td>
                                <td>{props.tenantDetail.address}</td>
                            </tr>
                            <tr>
                                <td>Kode Pos</td>
                                <td>{props.tenantDetail.postalCode}</td>
                            </tr>
                            <tr>
                                <td>Kota</td>
                                <td>{props.tenantDetail.city}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>


        </div>
    )
}

export default connect(mapStateProps, null)(DetailTenantComponent)