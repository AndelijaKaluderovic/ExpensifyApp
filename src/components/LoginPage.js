import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__h1'>Expensify</h1>
            <p>Put everything on the table!</p>
            <button 
            onClick={startLogin}
            className='button'
            >Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)