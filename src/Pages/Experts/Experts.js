import React from 'react';
import { Row } from 'react-bootstrap';
import expert1 from "../../Image/Experts/expert-1.jpg";
import expert2 from '../../Image/Experts/expert-2.jpg';
import expert3 from '../../Image/Experts/expert-3.jpg';
import expert4 from '../../Image/Experts/expert-4.jpg';
import expert5 from '../../Image/Experts/expert-5.jpg';
import expert6 from '../../Image/Experts/expert-6.png';
import Expert from './Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: expert1 },
        { id: 2, name: 'Chris Rock', img: expert2 },
        { id: 3, name: 'Dwayne Rock', img: expert3 },
        { id: 4, name: 'Messy Vai', img: expert4 },
        { id: 5, name: 'Ronaldo Bro', img: expert5 },
        { id: 6, name: 'Stachy Jhonson', img: expert6 },
    ]
    return (
        <Row id='expert'>
            {
                experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
            }
        </Row>
    );
};

export default Experts;
