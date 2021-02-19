import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = 
{
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) =>
{
    switch(action.type)
    {
        //return new state bc state 
        //using spread operator to create new object and manipulating only one we care
        case CHANGE_SEARCH_FIELD: 
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}