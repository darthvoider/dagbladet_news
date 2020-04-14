import {createStore} from 'redux';
import { initialState, reducer } from './reducer';

export function configureStore(state = initialState) {
    return createStore(reducer, state);
};

export const store = configureStore();
