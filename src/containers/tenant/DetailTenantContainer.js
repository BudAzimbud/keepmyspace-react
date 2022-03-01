import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findOneTenant } from '../../actions/ActionTenant'
import {connect} from 'react-redux'
import DetailTenantComponent from '../../components/DetailTenantComponent'
function DetailTenantContainer(props) {

  const { id } = useParams()

  useEffect(() => {
    props.dispatch(findOneTenant(id))
  });

  return (
    <div>
      <DetailTenantComponent />
    </div>
  )
}

export default connect()(DetailTenantContainer)