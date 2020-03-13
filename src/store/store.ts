import { createStore } from 'redux'

import apiKey from './reducers';

const store = createStore(apiKey);

export default store;
