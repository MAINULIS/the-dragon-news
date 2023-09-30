import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Our Terms And Conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nihil quisquam officiis beatae illo laborum distinctio quia esse error, quae porro, commodi veritatis sapiente voluptatem cum facere suscipit. Amet, illo!</p>
            <div>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li> adipisicing elit. Eveniet dolorem quas eos.</li>
                    <li> quibusdam similique cum odit consequatur</li>
                    <li> laboriosam maxime impedit quos odio.</li>
                    <li> nisi, magni porro eum tempora. Expedita, eveniet magni.</li>
                </ul>
            </div>
            <p>Go Back to <Link to="/register">Register</Link></p>

        </Container>
    );
};

export default Terms;