import React from 'react';
import './App.css';
import Header from './Components/Header'

import store from './store'
import {connect} from 'react-redux'

function App(props) {
    store.dispatch({type: 'SET-PAGES', page: 'test1'});
    return (
        <div>
            <Header/>
            test1
        </div>
    );
}

const mapStateToProps = (store) => {
    return {page: store.pageState};
}

export default connect(mapStateToProps)(App);
