import React, { useState } from "react";
import Subscription from "./Subscription.jsx";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SubsList = props => {
    const [subs, setSubs] = useState([]);

    function getAllSubs() {
        fetch('/api')
            .then(response =>  response.json())
            .then( data => {
                console.log(data)
                if (!Array.isArray(data)) data=[];
                setSubs(data);
                console.log(subs);
            })
            .catch(err => console.log('subscriptionRow getAllSubs err: ', err))
    }

    const subsElems = subs.map( (sub) => {
        return (
            <Subscription
                sub = {sub}
            />
        )
    })

    return (
        <div>
            <br/>
            <br/>
            <button onClick={getAllSubs}>Sync Subscription</button>
            <br/>
            <br/>
            <Row>
                <Col> Subscription </Col>
                <Col> Cost </Col>
                <Col> Start Month </Col>
                <Col> End Month </Col>
                <Col> Action </Col>
            </Row>
            {subsElems}
        </div>
    )
}

export default SubsList;