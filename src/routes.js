import React from 'react';
import App from "./App";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Login from './components/Login';
import DashBoard from './components/Dashboard';

export const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/Dashboard' component={DashBoard}></Route>
        </Switch>
    </Router>
)