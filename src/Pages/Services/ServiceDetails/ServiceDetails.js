import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceDetails } = useParams()
    return (
        <div>
            <h1>This is service Details{serviceDetails}</h1>
            <Link to="/checkout">Check Out</Link>
        </div>
    );
};

export default ServiceDetails;