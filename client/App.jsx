import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom';
import SubsForm from './components/CreateSubs.jsx';
import SubsList from './components/SubsList.jsx';
import CostChart from './components/costChart.jsx';

const App = (props) => {
    return ( 
        <div >
            <div>
             <SubsForm />
            </div>
            <div>
                <br/>
             <SubsList />  
              <br/>
            </div>
            <div>
            <br/>
             <CostChart />  
             <br/>
            </div>
        </div>
    );
};

export default App;