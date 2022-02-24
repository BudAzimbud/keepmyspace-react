import React from 'react'
import {useParams} from 'react-router-dom'
function DetailTenantContainer() {

    const {id} = useParams()
    
  return (
    <div>{id}</div>
  )
}

export default DetailTenantContainer