import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import TableSearchComponents from '../../components/TableTenantComponents'
import { connect } from 'react-redux'

import { emptyTenant, listAllTenant } from '../../actions/ActionTenant'

class TenantContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listAllTenant())
        this.props.dispatch(emptyTenant())
    }


    render() {
        return (
            <Container>
                <h3 className='text-secondary'>Daftar Keluarga</h3>
                <TableSearchComponents />
            </Container>
        )
    }

}

export default connect()(TenantContainer)