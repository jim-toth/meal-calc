import { combineReducers } from 'redux';

import { SET_API_KEY, API_KEY_ACTION } from './actions';

function apiKey(state = [], action: API_KEY_ACTION) {
  switch (action.type) {
    case SET_API_KEY:
      return [
        ...state,
        {
          text: action.apiKey
        }
      ];
    default:
      return state;
  }
}

const apiKeyReducer = combineReducers({
  apiKey
})

export default apiKeyReducer;
