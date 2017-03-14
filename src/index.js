import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ConfirmComponent from './components/Confirm';
import NotificationComponent from './components/Notification';

import { Router, Route, browserHistory } from 'react-router'

const Root = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="notification" component={NotificationComponent} />
            <Route path="confirm" component={ConfirmComponent} />
        </Route>
    </Router>
);

render(<Root/>, document.getElementById('root'));
