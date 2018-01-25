import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test("should setup remove expense action object", () => {
    const action = removeExpense({
        id : '1234a'
    });
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE', 
        id : '1234a'
    });
});

test("should setup edit expense action object", () => {
    const updates = {
        description : 'Test', 
        note : 'Test Note', 
        amount : 1000, 
        createAt : 10000
    };
    const id = "12345";
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type : 'EDIT_EXPENSE', 
        id, 
        updates
    });
});

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description : 'Renta', 
        amount : 10900, 
        createAt : 1000, 
        note : 'Test Note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE', 
        expense : {
            ...expenseData, 
            id : expect.any(String)
        }
    });
});

test("should setup add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE', 
        expense : {
            id : expect.any(String),
            description : '', 
            note : '', 
            amount : 0, 
            createAt : 0
        }
    });
});