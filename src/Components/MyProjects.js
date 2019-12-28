import React from 'react'

import store from '../store'
import Header from './Header';

export default function MyProjects(props) {
    store.dispatch({type: 'SET-PAGES', page: 'myprojects'});

    return (
        <div>
            <Header/>
            My projects
        </div>
    )
}
