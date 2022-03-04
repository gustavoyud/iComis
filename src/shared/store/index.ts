import {combineReducers, createStore} from 'redux';
import {FiltersReducer as filters} from './filters/reducers';
import {LittleCarReducer as littleCar} from './little-car/reducers';

/**
 * Reducers
 */
export const rootReducer = combineReducers({
  filters,
  littleCar,
});

/**
 * Root state
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Application store
 */
export const store = createStore(rootReducer);
