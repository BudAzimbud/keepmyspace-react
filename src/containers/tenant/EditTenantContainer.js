import React, { useState , useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TenantFormComponent from '../../components/TenantFormComponent'
import { connect } from 'react-redux'
import ButtonHome from '../../components/ButtonHome'
import { findOneTenant } from '../../actions/ActionTenant'

function EditTenantContainer(props) {

    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        props.dispatch(findOneTenant(id))
      });
    

    const handleSubmit = (data) => {
        setIsLoading(true)
    }
    return (
        <div>
            <Container>
                <ButtonHome />
                <TenantFormComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />
            </Container>
        </div>
    )
}

export default connect()(EditTenantContainer)