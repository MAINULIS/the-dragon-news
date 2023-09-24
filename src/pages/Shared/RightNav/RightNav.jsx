import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold'>Login With</h4>
            <Button className='mb-2 w-75' variant="outline-primary">  <FaGoogle /> Login With Google</Button>
            <Button className='w-75' variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className='mb-5'>
                <h4 className='mt-4 mb-2'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item ><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='container '>
                <img className='' src={bg} alt="" /> 
                <div>
                <h4>Create an Amazing Newspaper</h4>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                </div>
            </div>
        </div>
    );
};

export default RightNav;