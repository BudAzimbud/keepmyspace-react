import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import TableSearchComponents from '../../components/TableTenantComponents'
import { connect } from 'react-redux'

import { emptyTenant, listAllTenant } from '../../actions/ActionTenant'

class DashBoardContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listAllTenant())
        this.props.dispatch(emptyTenant())
    }


    render() {
        return (
            <Container>
                <TableSearchComponents />
            </Container>
        )
    }

}

export default connect()(DashBoardContainer)