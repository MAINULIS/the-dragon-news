import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container  className='mx-auto w-50 m-5 shadow-lg  p-5'>
            <Form className=''>
                <h2 className='text-secondary pb-3 mx-auto'>Login Your Account</h2> <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder=" Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Form.Text className="text-success">
                  
                </Form.Text>
                <Form.Text className="text-danger">
                    
                </Form.Text>
                <Button variant="secondary w-100 mb-3 fw-bold" type="submit">
                    Login
                </Button> 
                <br />
                <Form.Text className="text-secondary fw-semibold ">
                 Don't Have An Account? Please <Link to='/register'>Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;