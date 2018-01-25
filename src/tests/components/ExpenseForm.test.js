import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = "Nueva descripción";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : { value }
    });
    expect(wrapper.state("description")).toBe(value);
});

test('should set note on textarea change', () => {
    const value = "Una nueva nota";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : { value }
    });
    expect(wrapper.state("note")).toBe(value);
});

test('should set amount if valid input', () => {
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = "12.122";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : { value }
    });
    //expect(wrapper.state("amount")).not.toBe(value);
    expect(wrapper.state("amount")).toBe('');
});


test('should call onSubmit form prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state("error")).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[1].description,
        amount : expenses[1].amount,
        createAt : expenses[1].createAt.valueOf(),
        note : expenses[1].note
    });
    // const onSubmitSpy = jest.fn();
    // onSubmitSpy({name : 'Nombre', place : 'lugar'});
    // expect(onSubmitSpy).toHaveBeenLastCalledWith({name : 'Nombre', place : 'lugar'});
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state("createAt")).toEqual(now);
});

test('should set calendar focus on change', () => {
    const  focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state("calendarFocused")).toEqual(focused);
});