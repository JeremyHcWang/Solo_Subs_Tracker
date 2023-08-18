import React, { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';

const CostChart = (props) => {
    const [totalCost, setTotalCost] = useState([]);
    
    const generateChart = () => {
        fetch('/api/cost')
            .then(response => response.json())
            .then( data => {
                console.log(data)
                return setTotalCost(data);
            })
            .catch(err => console.log('subscriptionRow getAllSubs err: ', err))
    }
    console.log(totalCost);
    return (
        <div>
            <button onClick={generateChart}>Generate</button>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Jan.</th>
                    <th>Feb.</th>
                    <th>Mar.</th>
                    <th>Apr.</th>
                    <th>May</th>
                    <th>Jun.</th>
                    <th>Jul.</th>
                    <th>Aug.</th>
                    <th>Sep.</th>
                    <th>Oct.</th>
                    <th>Nov.</th>
                    <th>Dec.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{totalCost['1']}</td>
                    <td>{totalCost['2']}</td>
                    <td>{totalCost['3']}</td>
                    <td>{totalCost['4']}</td>
                    <td>{totalCost['5']}</td>
                    <td>{totalCost['6']}</td>
                    <td>{totalCost['7']}</td>
                    <td>{totalCost['8']}</td>
                    <td>{totalCost['9']}</td>
                    <td>{totalCost['10']}</td>
                    <td>{totalCost['11']}</td>
                    <td>{totalCost['12']}</td>
                </tr>
            </tbody>
            </Table>
        </div>  
    );
};

export default CostChart;