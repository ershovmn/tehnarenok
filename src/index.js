import React, { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'))

ReactDOM.render(
    <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/home/' component={App}/>
            </Switch>
        </Suspense>
    </Router>
    , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
