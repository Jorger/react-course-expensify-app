//Get Visible expenses...
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;        
        // const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const createAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
        const textMatch = textMatch === "" || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => 
        sortBy === "date" ? 
        a.createAt < b.createAt ? 1 : -1 : 
        a.amount < b.amount ? 1 : -1
    );
};

/*
// if(sortBy === "date") {
//     return a.createAt < b.createAt ? 1 : -1;
// } else if( sortBy === "amount") {
//     return a.amount < b.amount ? 1 : -1;
// }
*/