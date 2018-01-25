import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
/*
store.subscribe(() => {
    const state = store.getState();
    const { expenses, filters } = state;
    const visibleExpeses = getVisibleExpenses(expenses, filters);
    //console.group("visibleExpeses")
    console.log(visibleExpeses);
    //console.groupEnd("visibleExpeses");
});
*/

store.dispatch(addExpense({
    description : "Water bill", 
    amount : 4500
}));

store.dispatch(addExpense({
    description : "Gas bill", 
    createAt: 1000
}));

store.dispatch(addExpense({
    description : "Rent", 
    amount : 109500
}));

/*
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);
*/


const state = store.getState();
console.log(state);
/*
const { expenses, filters } = state;
const visibleExpeses = getVisibleExpenses(expenses, filters);
console.log(visibleExpeses);
*/

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(
    jsx, 
    document.getElementById("app")
);