import moment from 'moment';

export default [{
    id : '1', 
    description : 'Gum', 
    note : 'La primera', 
    amount : 195, 
    createAt : 0
},{
    id : '2', 
    description : 'Rent', 
    note : 'La Segunda', 
    amount : 109500, 
    createAt : moment(0).subtract(4, 'days').valueOf()
},{
    id : '3', 
    description : 'Credit Card', 
    note : 'La Tercera', 
    amount : 4500, 
    createAt : moment(0).add(4, 'days').valueOf()
}];