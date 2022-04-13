import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Services = ({ service }) => {
    const { img, name, description } = service
    return (
        <Col lg={4} md={6}>
            <Card className='mb-4 shadow'>
                <Card.Img className='p-2 rounded-4' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" className="btn-primary">Primary</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;