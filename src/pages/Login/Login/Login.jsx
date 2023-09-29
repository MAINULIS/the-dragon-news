import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handleLogin = event =>{
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User has been successfully logged in');
            event.target.reset();
        })
        .catch(error =>{
            setError(error.message);
        })

    }
    return (
        <Container className='mx-auto w-50 m-5 shadow-lg  p-5'>
            <Form onSubmit={handleLogin}>
                <h2 className='text-secondary pb-3 mx-auto'>Login Your Account</h2> <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder=" Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3 text-info " controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember email & password" />
                </Form.Group>
                <div className='text-center'>
                    <Form.Text className="text-success">
                            {success}                
                    </Form.Text>
                    <Form.Text className="text-danger ">
                            {error}
                    </Form.Text>
                </div>
                <Button variant="secondary w-100 my-3 fw-bold" type="submit">
                    Login
                </Button>
                <div className='text-center'>
                    <Form.Text className="text-secondary fw-semibold ">
                        Don't Have An Account? Please <Link to='/register'>Register</Link>
                    </Form.Text>
                </div>
            </Form>
        </Container>
    );
};

export default Login;