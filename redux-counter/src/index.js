import {createStore} from 'redux';

// reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state +1;
        case 'DEC':
            return state -1;
        case 'RES':
            return 0
        default:
            return state
    }
}

// store init
let store = createStore(reducer);

// helping functions

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = () => ({type: 'RES'});

//buttons click check
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc())
});
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec())
});
document.getElementById('res').addEventListener('click', () => {
    store.dispatch(res())
});

// refresh counter function
const update = () => {
    document.getElementById('counter').innerText = store.getState();
}

//subscribe to store on every state update run update script
store.subscribe(update);