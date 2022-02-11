import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginFormComponent from '../components/LoginFormComponent';
import backgroundLogin from '../images/backgroundLogin.svg'
class componentName extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row className='mt-3'>
                        <Col xs lg={5}>
                            <LoginFormComponent />
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
}

export default componentName;