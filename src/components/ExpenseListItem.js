import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createAt}) => (
    <div>
        <h3>
        <Link to={`/edit/${id}`}>
            {description}
        </Link>
        </h3>
        <p>{amount} - {createAt}</p>
    </div>
);

//export default connect()(ExpenseListItem);

export default ExpenseListItem;