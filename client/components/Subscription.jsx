import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Subscription = props => {
    const { sub, getAllSubs } = props;

    const deleteSubs = () => {
        const subsName = sub.name
        fetch('/api/subscription', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({subsName})
        })
    };

    return (
        <Row>
            <Col> {sub.name} </Col>
            <Col> {sub.cost} </Col>
            <Col> {sub.startMonth} </Col>
            <Col> {sub.endMonth} </Col>
            <Col>
                <button onClick={deleteSubs}>Delete</button>
            </Col>
        </Row>
    )
};

export default Subscription;