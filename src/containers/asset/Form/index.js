import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import FormVehicleComponent from './Component/FormVehicleComponent'
import FormBuildingComponent from './Component/FormBuildingComponent'
import { createAsset } from '../../../actions/ActionAsset'
const mapStateProps = (state) => {
    return {

    }
}

function FormAsset(props) {

    const history = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const [selectCategory, setSelectCategory] = useState('')

    useEffect(() => {

    }, [selectCategory])

    const handleSubmit = (data) => {

        const keyInput = Object.keys(data)

        let detail = {}

        keyInput.forEach((key) => {
            if (key.includes("detail")) {
                detail[key] = data[key]
                delete data[key]
            }
        })

        props.dispatch(createAsset({
            "assetName": data.assetName,
            "value": parseInt(data.value),
            "note": data.note,
            "category": selectCategory,
            detail
        }))
        setIsLoading(true)
        return (<Navigate to={"/asset"} />)
    }


    const swithComponentCategory = (category) => {
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
        <div>
            <Container className="mt-3">
                <h4 className='mt-3'>Tambah Warisan</h4>
                <Form.Select aria-label="Default select example" onChange={(event) => {
                    setSelectCategory(event.target.value)
                }}>
                    <option>Pilih Kategori</option>
                    <option value="Kendaraan">Kendaraan</option>
                    <option value="Bangunan">Bangunan</option>

                </Form.Select>
                {
                    swithComponentCategory(selectCategory)
                }
            </Container>
        </div>
    )
}

export default connect(mapStateProps, null)(FormAsset)