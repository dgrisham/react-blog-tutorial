import { createStore, combineReducers } from 'redux';

import articles from './reducers/articles';
import home from './reducers/home';

const reducers = combineReducers({
  articles,
  home,
});

const store = createStore(reducers);

export default store;
