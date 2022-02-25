import {combineReducers, createStore} from 'redux';
import {FiltersReducer as filters} from './filters/reducers';

/**
 * Reducers
 */
export const rootReducer = combineReducers({
  filters,
});

/**
 * Root state
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Application store
 */
export const store = createStore(rootReducer);
