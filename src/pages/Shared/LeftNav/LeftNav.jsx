import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavCards from './LeftNavCards';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))

    }, [])
    return (
        <div>
            <h3>All Category</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/ ${category.id}`} className='text-decoration-none text-secondary fw-semibold'> {category.name} </Link>
                    </p>)
                }
            </div>
            <LeftNavCards></LeftNavCards>
        </div>
    );
};

export default LeftNav;