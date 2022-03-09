import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        asset: state.assets.getAssetResponse
    }
}

function DetailBuildingComponent(props) {

    return (
        <Container>
            {
                props.asset.category === "Bangunan" ?
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
                                <td>Nomer Sertifikat</td>
                                <td>{props.asset.detail.detailcertification}</td>
                            </tr>
                            <tr>
                                <td>Luas tanah</td>
                                <td>{props.asset.detail.detailsizeSoil}</td>
                            </tr>
                            <tr>
                                <td>Luas Bangunan</td>
                                <td>{props.asset.detail.detailsizeBuilding}</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>{props.asset.detail.detailaddress}</td>
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

export default connect(mapStateToProps, null)(DetailBuildingComponent)