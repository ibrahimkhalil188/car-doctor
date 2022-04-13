
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/genius-car-service-module-60/main/public/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='home'>
            <Banner></Banner>

            <Container id='service'>
                <h1 className='text-primary mt-5 p-4 display-4 fw-bolder'>Our Services</h1>
                <Row>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </Row>
            </Container>
            <Experts></Experts>
        </div>
    );
};

export default Home;