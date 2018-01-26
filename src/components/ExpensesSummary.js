import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                <p>Viewing {props.expenses.length} expenses totalling {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses : selectExpenses(
        state.expenses, state.filters
    )
});

export default connect(mapStateToProps)(ExpensesSummary);