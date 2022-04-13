import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Services = ({ service }) => {
    const { img, name, description, id } = service
    const navigate = useNavigate()
    return (
        <Col lg={4} md={6}>
            <Card className='mb-4 shadow'>
                <Card.Img className='p-2 rounded-4' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => navigate(`service/${id}`)} variant="primary" className="btn-primary">Primary</Button >
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;