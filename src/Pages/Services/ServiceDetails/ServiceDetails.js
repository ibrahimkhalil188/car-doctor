import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceDetails } = useParams()
    return (
        <div>
            <h1>This is service Details{serviceDetails}</h1>
        </div>
    );
};

export default ServiceDetails;