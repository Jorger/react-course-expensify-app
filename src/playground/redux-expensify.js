import uuid from 'uuid';
import { createStore, combineReducers } from 'redux';

// Para expenses...
// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createAt = 0    
    } = {}
) => ({
    type : "ADD_EXPENSE", 
    expense : {
        id : uuid(), 
        description, 
        note, 
        amount, 
        createAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type : "REMOVE_EXPENSE", 
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type : "EDIT_EXPENSE", 
    id, 
    updates
});

// Para los filters
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type : "SET_TEXT_FILTER", 
    text
});

// SORT_BY_DATE
const sortByDate = () => ({ type : "SORT_BY_DATE" });

// SORT_BY_AMOUNT
const sortByAmount = () => ({ type : "SORT_BY_AMOUNT" });


// SET_START_DATE
const setStartDate = (startDate) => ({
    type : "SET_START_DATE", 
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type : "SET_END_DATE", 
    endDate
});


// Expenses reducer...
// Default State value...
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE" : 
            return [...state, action.expense]
        case "REMOVE_EXPENSE" : 
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE" : 
            return state.map((expense) => expense.id === action.id ? {...expense, ...action.updates} : expense);
        default : 
            return state;
    }
};


//Filter reducer...

const filtersReducerDefaultState = {
    text : '', 
    sortBy : 'date',
    startDate : undefined, 
    endDate : undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER" : 
            return {
                ...state, 
                text : action.text
            };
        case "SORT_BY_AMOUNT" : 
            return {
                ...state, 
                sortBy : 'amount'
            };
        case "SORT_BY_DATE" : 
            return {
                ...state, 
                sortBy : 'date'
            };
        case "SET_START_DATE" : 
            return {
                ...state, 
                startDate : action.startDate
            };
        case "SET_END_DATE" : 
            return {
                ...state, 
                endDate : action.endDate
            };
        default : 
            return state;
    }
};

//Store...
const store = createStore(
    combineReducers({
        expenses : expensesReducer, 
        filters : filtersReducer
    })
);


//Get Visible expenses...
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;        
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = textMatch === "" || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === "date") {
            return a.createAt < b.createAt ? 1 : -1;
        } else if( sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const { expenses, filters } = state;
    const visibleExpeses = getVisibleExpenses(expenses, filters);
    //console.group("visibleExpeses")
    console.log(visibleExpeses);
    //console.groupEnd("visibleExpeses");
});

const expenseOne = store.dispatch(addExpense({
    description : "rent", 
    amount : 100, 
    createAt: -21000
}));

const expenseTwo = store.dispatch(addExpense({
    description : "La segunda", 
    amount : 300, 
    createAt: -1000
}));


// store.dispatch(
//     removeExpense(
//         {
//             id : expenseOne.expense.id
//         }
//     )
// );

// store.dispatch(
//     editExpense(expenseTwo.expense.id, {
//         amount : 500
//     })
// );

//store.dispatch(setTextFilter('seg'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1456));

//store.dispatch(setEndDate());

//console.log(expenseOne.expense);

//console.log(store.getState());

const demoState = {
    expenses : [{
        id : '333ssfd', 
        description : 'Renta Enero', 
        note : 'Prueba de texto para la renta de enero', 
        amount : 12344, 
        createAt : 0
    }], 
    filters : {
        text : 'Renta', 
        sortBy : 'amout', //date o amout
        startDate : undefined, 
        endDate : undefined
    }
};

/*
const user = {
    name : "Jorge", 
    age : 33
};

const updateUser = {
    age : 50
};

console.log({
    ...user,
    ...updateUser 
});
*/