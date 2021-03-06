import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header className='header'>
        <Link className='header__title' to='/dashboard'>
            <h2>Expensify</h2>
        </Link>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)