import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { 
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate
} from '../actions/filters';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }

    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused ) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if(e.target.value === "date") {
            this.props.sortByDate();
        } if(e.target.value === "amount") {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId="startDateId"
                    endDate={this.props.filters.endDate}
                    endDateId="endDateId"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    filters : state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate : (startDate) => dispatch(setStartDate(startDate)), 
    setEndDate : (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter : (text) => dispatch(setTextFilter(text)), 
    sortByDate : () => dispatch(sortByDate()), 
    sortByAmount : () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);