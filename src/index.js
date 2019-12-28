import React, { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'

import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'))
const Home = lazy(() => import('./Components/Home'))
const MyProjects = lazy(() => import('./Components/MyProjects'))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/myprojects' component={MyProjects}/>
                </Switch>
            </Suspense>
        </Router>
    </Provider>
    , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
