import { createStore } from 'redux';

//Action generators -> Son funciones que retorna objetos de acciones...
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type : 'INCREMENT', 
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type : 'DECREMENT', 
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type : 'SET', 
    count
});

const resetCount = () => ({ type : 'RESET' });

//Reducers...
//1. Los reduceres son funciones puras: 
    //La salida es determinada por la entrada...
//2. Nunca cambiar el estado o la acción...

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case "INCREMENT" : 
            //const incrementBy = action.incrementBy || 1;
            return {
                count : state.count + action.incrementBy
            };
        case "DECREMENT" : 
            return {
                count : state.count - action.decrementBy
            };
        case "RESET" : 
            return {
                count : 0
            };
        case "SET" : 
            const count = typeof action.count === "number" ? action.count : 0;
            return { count };
        default : 
            return state;
    }
};

const store = createStore(countReducer);

//Para ver los cambios que se realizan...
//Se llama cada vez que estado cambia
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions, un objeto que se envía al store, describe la acción...
//console.log(store.getState());

store.dispatch(incrementCount({ incrementBy : 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy : 2 }));

store.dispatch(setCount());

store.dispatch(setCount({ count : 100 }));

store.dispatch(resetCount());

//Para cancelar la suscripción...
//unsubscribe();


//No es pura
// let a = 10;
// const add = (b) => {
//     return a + b;
// };

//Tampoco es pura...
// let result;
// const add = (b) => {
//     result = a + b;
// };