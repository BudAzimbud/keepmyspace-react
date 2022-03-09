import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateProps = (state) => {
    return {
        tenantDetail: state.tenants.findTenantResponse,
    };
};

function DetailTenantComponent(props) {

    return (
        <div>
            <Container>


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
            </Container>


        </div>
    )
}

export default connect(mapStateProps, null)(DetailTenantComponent)