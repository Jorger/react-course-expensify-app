import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, createAt}) => (
    <div>
        <h3>
        <Link to={`/edit/${id}`}>
            {description}
        </Link>
        </h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createAt).format('Do MMMM, YYYY')}
        </p>
    </div>
);

//export default connect()(ExpenseListItem);

export default ExpenseListItem;