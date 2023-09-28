import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">

                            <Link className='text-decoration-none' to='/category/0'>Home</Link>
                            <Link className='text-decoration-none ms-4' to='/'>About</Link>
                            <Link className='text-decoration-none ms-4' to='/'>Career</Link>


                        </Nav>
                        <Nav>
                            {user &&
                                < FaCircleUser style={{ fontSize: '2rem' }} />
                            }

                            {user ?
                                <Button className='py-1 px-4 w-75 ms-2' variant="dark">LogOut</Button> :
                                <Link to='/login'>
                                    <Button className='py-1 px-4 ' variant="dark">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;