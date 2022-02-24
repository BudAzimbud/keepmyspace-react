import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { createTenant } from '../../actions/ActionTenant';
import TenantFormComponent from '../../components/TenantFormComponent';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        createTenantResponse: state.tenants.createTenantResponse,
        createTenantError: state.tenants.createTenantError
    }
}


function CreateTenantContainer(props) {

    const history = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (data) => {
        props.dispatch(createTenant(data))
        setIsLoading(true)
        history('/dashboard', { state: true })

    }

    return (
        <Container>
            <TenantFormComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />
        </Container>
    );
}

export default connect(mapStateToProps, null)(CreateTenantContainer);