import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ConfirmComponent from './components/Confirm';
import NotificationComponent from './components/Notification';
import Challange1Component from './components/Challange1';

import { Router, Route, hashHistory } from 'react-router';

const Root = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="notification" component={NotificationComponent} />
            <Route path="confirm" component={ConfirmComponent} />
            <Route path="challange1" component={Challange1Component} />
        </Route>
    </Router>
);

render(<Root/>, document.getElementById('root'));
