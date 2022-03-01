import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h2>Expensify</h2>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>  Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </nav>
    </div>
)
export default Header