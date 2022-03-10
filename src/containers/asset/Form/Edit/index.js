import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editAsset, getAsset } from '../../../../actions/ActionAsset'
import FormBuildingComponent from '../Components/FormBuildingComponent'
import FormVehicleComponent from '../Components/FormVehicleComponent'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        asset: state.assets.getAssetResponse
    }
}

function EditAssetContainer(props) {

    const { id } = useParams()

    useEffect(() => {
        props.dispatch(getAsset(id))
    })

    const history = useNavigate()

    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (data) => {

        const keyInput = Object.keys(data)

        let detail = {}

        keyInput.forEach((key) => {
            if (key.includes("detail")) {
                detail[key] = data[key]
                delete data[key]
            }
        })


        props.dispatch(editAsset(id, {
            "assetName": data.assetName,
            "value": parseInt(data.value),
            "note": data.note,
            "category": "Bangunan",
            detail
        }))
        console.log({
            "assetName": data.assetName,
            "value": parseInt(data.value),
            "note": data.note,
            "category": "Bangunan",
            detail
        })
        setIsLoading(true)
        history('/asset', { useState: true })
    }



    const descisionCategory = (category) => {
        switch (category) {
            case 'Kendaraan':
                return (<FormVehicleComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />)
            case 'Bangunan':
                return (<FormBuildingComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />)
            default:
                return null
        }
    }



    return (
        <Container className="mt-4">
            <h5 className='text-secondary'>Edit harta warisan</h5>
            {
                descisionCategory(props.asset.category)
            }
        </Container>
    )
}

export default connect(mapStateToProps, null)(EditAssetContainer)