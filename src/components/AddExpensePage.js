import React from 'react'
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className='page-header'>
                    <h1>Add Expense</h1>
                </div>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>

        )
    };
};

// It is easier to test with mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
