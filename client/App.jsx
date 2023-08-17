import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom';
import SubsForm from './components/CreateSubs.jsx';
import SubsList from './components/SubsList.jsx';

const App = (props) => {
    return ( 
        <div >
            <div>
             <SubsForm />
            </div>
            <div>
             <SubsList />  
            </div>
        </div>
    );
};

export default App;