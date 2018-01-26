import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
    <div>
        {
            <h1>
                Viewing {expensesCount} {expensesCount >= 2 ? "Expenses" : "Expense"} totalling {numeral(expensesTotal / 100).format('$0,0.00')}
            </h1>
        }
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(
        state.expenses, state.filters
    );
    return {
        expensesCount : visibleExpenses.length, 
        expensesTotal : selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);