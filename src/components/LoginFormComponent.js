import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import avatar from '../images/avatar.svg'
class LoginFormComponent extends Component {

    render() {
        return (
            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <img src={avatar} width={100} alt='avatar login' />
                </div>

                <Form >
                    <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div id="emailHelp" class="form-text mb-2"><a href='/forget-password'>Forget password</a></div>

                    <Button variant="primary" className='mt-2' type="submit">
                        Login
                    </Button>


                </Form>



            </div>
        );
    }
}

export default LoginFormComponent;