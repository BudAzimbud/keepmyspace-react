import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        asset: state.assets.getAssetResponse
    }
}

function DetailVehicleComponent(props) {
    return (
        <Container>
            {
                props.asset.category === "Kendaraan" ?
                    <Table >
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Nama harta</td>
                                <td>{props.asset.assetName}</td>
                            </tr>
                            <tr>
                                <td>Harga</td>
                                <td>{props.asset.value}</td>
                            </tr>
                            <tr>
                                <td>Kategori</td>
                                <td>{props.asset.category}</td>
                            </tr>
                            <tr>
                                <td>Catatan</td>
                                <td>{props.asset.note}</td>
                            </tr>
                            <tr>
                                <td>Jenis Kendaraan</td>
                                <td>{props.asset.detail.detailkindvehicle}</td>
                            </tr>
                            <tr>
                                <td>Merek</td>
                                <td>{props.asset.detail.detailbrand}</td>
                            </tr>
                            <tr>
                                <td>Nomer Plat</td>
                                <td>{props.asset.detail.detailnumberplat}</td>
                            </tr>
                            <tr>
                                <td>Pembayaran</td>
                                <td>{props.asset.detail.detailpaid}</td>
                            </tr>
                        </tbody>
                    </Table>
                    : null
            }
        </Container>
    )
}

export default connect(mapStateToProps, null)(DetailVehicleComponent)