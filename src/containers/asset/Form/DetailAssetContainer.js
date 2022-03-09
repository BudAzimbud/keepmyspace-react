import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAsset } from '../../../actions/ActionAsset'
import DetailBuildingComponent from './Component/DetailBuildingComponent'
import DetailVehicleComponent from './Component/DetailVehicleComponent'



function DetailAssetContainer(props) {

    const { id } = useParams()

    useEffect(() => {
        props.dispatch(getAsset(id))
    })

    return (
        <Container>
            <h3 className='mt-3 text-secondary'>Detail Harta Warisan</h3>
            <DetailBuildingComponent />
            <DetailVehicleComponent />
        </Container>
    )
}

export default connect()(DetailAssetContainer)