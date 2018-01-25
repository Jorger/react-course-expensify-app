import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("should setup default state", () => {
    const state = expensesReducer(undefined, { type : "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type : "REMOVE_EXPENSE", 
        id : expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id no found", () => {
    const action = {
        type : "REMOVE_EXPENSE", 
        id : "4"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test("should add an expenses", () => {
    const expense = {
        id : '4', 
        description : 'Cuarta', 
        note : 'La Cuarta', 
        amount : 200, 
        createAt : 1000
    };
    const action = {
        type : "ADD_EXPENSE", 
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expenses", () => {
    const updates = {
        description : 'Cambia la dos', 
        note : 'Es nueva la dos', 
        amount : 2000, 
        createAt : -1000
    };
    const action = {
        type : "EDIT_EXPENSE", 
        id : expenses[1].id, 
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual({
        ...updates, 
        id : expect.any(String)
    });
});

test("should not edit an expenses if expense not found", () => {
    const action = {
        type : "EDIT_EXPENSE", 
        id : '5', 
        updates : {
            description : 'none'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});