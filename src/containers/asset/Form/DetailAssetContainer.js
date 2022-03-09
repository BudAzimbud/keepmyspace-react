import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAsset } from '../../../actions/ActionAsset'
import DetailBuildingComponent from './Component/DetailBuildingComponent'
import DetailVehicleComponent from './Component/DetailVehicleComponent'


const mapStateProps = (state) => {
    return {
        asset: state.assets.getAssetResponse
    }
}

function DetailAssetContainer(props) {

    const { id } = useParams()

    useEffect(() => {
        props.dispatch(getAsset(id))
    })

    return (
        <Container>
            <h3 className='mt-3 text-secondary'>Detail Harta Warisan</h3>
            {
                props.asset ? (
                    <React.Fragment>
                        <DetailBuildingComponent />
                        <DetailVehicleComponent />
                    </React.Fragment>) : <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }

        </Container>
    )
}

export default connect(mapStateProps, null)(DetailAssetContainer)