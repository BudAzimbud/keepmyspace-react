import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import TenantFormComponent from '../../components/TenantFormComponent'
import { connect } from 'react-redux'
import ButtonHome from '../../components/ButtonHome'
import { editTenant, findOneTenant } from '../../actions/ActionTenant'
import Swal from 'sweetalert2'

function EditTenantContainer(props) {

    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate()
    useEffect(() => {
        props.dispatch(findOneTenant(id))
    });

    const handleSubmit = (data) => {
        props.dispatch(editTenant(id, data))
        setIsLoading(true)
        history('/dashboard', { state: true })
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Ok Data Berhasil Di edit'
        })
    }
    return (
        <div>
            <Container className='mt-4'>
                <ButtonHome />
                <h4 className='mt-3'>Mengubah Data Keluarga</h4>

                <TenantFormComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />
            </Container>
        </div>
    )
}

export default connect()(EditTenantContainer)