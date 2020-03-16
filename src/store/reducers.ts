// import { combineReducers } from 'redux';

import { SET_API_KEY, API_KEY_ACTION } from './actions';
import { ApiKeyState } from './types';


const initialState: ApiKeyState = {
  apiKey: 'intial'
};

function apiKey(state = initialState, action: API_KEY_ACTION): ApiKeyState {
  console.log(action)
  switch (action.type) {
    case SET_API_KEY:
      return {
        ...state,
        apiKey: action.apiKey
      };
    default:
      return state;
  }
}

export default apiKey;

// const apiKeyReducer = combineReducers(apiKey)

// export default apiKeyReducer;
