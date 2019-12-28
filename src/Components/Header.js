import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../logo.svg'

import {connect} from 'react-redux'

function Header(props) {
    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <img src={logo} alt='logo' width='60px' height='60px'/>
            </Link>
            <div className='header-right'>
                <Link to='/' className={props.page === 'home' ? 'active' : ''}>Главная</Link>
                <Link to='/myprojects' className={props.page === 'myprojects' ? 'active' : ''}>Мои проекты</Link>
            </div>
        </div>
    )   
}

const mapStateToProps = (store) => {
    console.log(store)
    return {page: store.pageState};
}

export default connect(mapStateToProps)(Header)