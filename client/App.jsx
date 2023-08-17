import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import subsForm from './components/createSubs';

const App = props => {
    return ( 
        <div className="router">
            <main>
                <Switch>
                    <Route
                    exact
                    path="/"
                    component={subsForm}
                    />
                </Switch>
            </main>
        </div>
    );
};

export default App;