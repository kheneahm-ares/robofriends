import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});


//instead of returning an object, we're returning a function
//thunk middleware will look for this and allow the reducer 
//to get back once the async call is done by calling the function returned/dispatched
export const requestRobots = () => (dispatch) =>
{
    //dispatch the pending action
    dispatch({type: REQUEST_ROBOTS_PENDING})

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users})
    })
    .catch((exc) => {
        dispatch({type: REQUEST_ROBOTS_FAIL, payload: exc})
    });
}
