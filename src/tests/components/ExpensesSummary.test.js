import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpensesSummary with multiple expenses', () => {
    const expensesCount = expenses.length;
    const expensesTotal = selectExpensesTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expensesCount={expensesCount} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});