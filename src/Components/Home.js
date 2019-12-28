import React from 'react'
import Header from './Header'

import {connect} from 'react-redux'
import store from '../store'

function Home(props) {
    store.dispatch({type: 'SET-PAGES', page: 'home'});
    return(
        <div>
            <Header />
            Home
        </div>
    )
}

const mapStateToProps = (store) => {
    return {page: store.pageState};
}

export default connect(mapStateToProps)(Home);