import {createStore, combineReducers} from 'redux';
import { root } from 'postcss-selector-parser';

const INITIAL_STATE_TYPE = {
    data: 'Length',
};

const INITIAL_STATE_RESULTS = {
    data: []
}

function typeReducer(state = INITIAL_STATE_TYPE, action) {
    switch (action.type) {
        case 'SET_TYPE':
            return { ...state, data: action.payload };
        default:
            return state;
    }
}

function resultsReducer(state = INITIAL_STATE_RESULTS, action) {
    switch (action.type) {
        case 'ADD_RESULT':
            return { ...state, data: [...state.data, action.payload]};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    type: typeReducer,
    results: resultsReducer
})

const store = createStore(rootReducer);

export default store;