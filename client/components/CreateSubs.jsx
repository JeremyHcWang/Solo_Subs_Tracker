import React, { useState, useEffect } from "react";
//import { withRouter } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom hook for handling input boxes
const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    // return the value with the onChange function instead of setValue function
    return [ value, onChange ];
};

const SubsForm = props => {
    const [subsName, setSubsName] = useInput('');
    const [cost, setCost] = useInput('');
    const [startMonth, setStartMonth] = useInput('');
    const [endMonth, setEndMonth] = useInput('');
    const [nameError, setNameError ] = useState(null);
    const [costError, setCostError ] = useState(null);

    const saveSubs = () => {
        if (subsName === '') {
            setNameError('Name Required');
        } else if (isNaN(cost)) {
            setCostError('Number Required')
        } else {
            const body = {
                subsName,
                cost,
                startMonth,
                endMonth,
            };
            console.log(body);
            fetch('/api/subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify(body)
            })
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(err => console.log('subsForm post /api/subscription: ERROR: ', err))
        }
    }

    // useEffect to clear error when inputs are changed
    useEffect( () => {setNameError(null);}, [subsName] );
    useEffect( () => {setCostError(null);}, [cost] );

    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Subscription Name" onChange={setSubsName}/>
                        {nameError ? (<span>{nameError}</span>) : null}
                    </Col>
                    <Col>
                        <Form.Control placeholder="Cost" onChange={setCost}/>
                        {costError ? (<span>{costError}</span>) : null}
                    </Col>
                    <Col>
                        <Form.Select aria-label="Start Month" onChange={setStartMonth}>
                            <option>Choose start month</option>
                            <option type="number" value="1">Jan.</option>
                            <option type="number" value="2">Feb.</option>
                            <option type="number" value="3">Mar.</option>
                            <option type="number" value="4">Apr.</option>
                            <option type="number" value="5">May</option>
                            <option type="number" value="6">Jun.</option>
                            <option type="number" value="7">Jul.</option>
                            <option type="number" value="8">Aug.</option>
                            <option type="number" value="9">Sep.</option>
                            <option type="number" value="10">Oct.</option>
                            <option type="number" value="11">Nov.</option>
                            <option type="number" value="12">Dec.</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select aria-label="End Month" onChange={setEndMonth}>
                            <option>Choose end month</option>
                            <option type="number" value="1">Jan.</option>
                            <option type="number" value="2">Feb.</option>
                            <option type="number" value="3">Mar.</option>
                            <option type="number" value="4">Apr.</option>
                            <option type="number" value="5">May</option>
                            <option type="number" value="6">Jun.</option>
                            <option type="number" value="7">Jul.</option>
                            <option type="number" value="8">Aug.</option>
                            <option type="number" value="9">Sep.</option>
                            <option type="number" value="10">Oct.</option>
                            <option type="number" value="11">Nov.</option>
                            <option type="number" value="12">Dec.</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button type="button" variant="primary" onClick={saveSubs}>Save</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SubsForm;

