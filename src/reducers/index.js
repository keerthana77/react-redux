import {combineReducers} from 'redux';
import counter from './counter';
import isLogged from './isLogged';

const reducer = combineReducers({
    counter: counter,
    isLogged: isLogged
})

export default reducer;