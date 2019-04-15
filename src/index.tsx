import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/style.scss';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={SignIn} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('render-target')
);
