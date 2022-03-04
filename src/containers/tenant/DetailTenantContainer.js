import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findOneTenant } from '../../actions/ActionTenant'
import { connect } from 'react-redux'
import DetailTenantComponent from '../../components/DetailTenantComponent'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonHome from '../../components/ButtonHome'

function DetailTenantContainer(props) {

  const { id } = useParams()

  useEffect(() => {
    props.dispatch(findOneTenant(id))
  });

  return (
    <div className='mt-4'>
      <Container>

        <h3>Detail Keluarga</h3>

        <DetailTenantComponent />


      </Container>
    </div>
  )
}

export default connect()(DetailTenantContainer)