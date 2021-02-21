import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

const initialStateRobots =
{
    robots: [],
    isPending: false,
    error: '',
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    //return new state bc state
    //using spread operator to create new object and manipulating only one we care
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAIL:
      return { ...state, isPending: true, error: action.payload};
    default:
        return state;
  }
};
