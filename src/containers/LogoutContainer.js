import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function LogoutContainer() {

    const history = useNavigate()

    useEffect(() => {
        localStorage.remoteItem('token')
        history('/login', { state: true })
    })

    return (
        <div>
        </div>
    )
}

export default LogoutContainer