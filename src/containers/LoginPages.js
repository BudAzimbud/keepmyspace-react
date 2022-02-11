import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginFormComponent from '../components/LoginFormComponent';
import backgroundLogin from '../images/backgroundLogin.svg'

import { connect } from 'react-redux'
import { createAccessToken } from '../actions/ActionUser';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        token: state.users.accessTokenResponse,
    }
}

function LoginContainer(props) {
    const history = useNavigate()

    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (data) => {
        props.dispatch(createAccessToken(data));
        setIsLoading(true)
    }

    if (props.token) {
        localStorage.setItem('token', props.token.access_token)
        history('/dashboard', { state: true })

    }


    return (
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col xs lg={5}>
                        <LoginFormComponent onSubmit={(data) => { handleSubmit(data) }} isLoading={isLoading} />
                    </Col>
                    <Col>
                        <div className='mr-3'>
                            <img src={backgroundLogin} width='500' alt='background login' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, null)(LoginContainer);