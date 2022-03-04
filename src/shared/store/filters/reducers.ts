import {FilterAction, Filters, FILTERS_ACTIONS_TYPES} from './types';

/**
 * Config initial state
 */
const INITIAL_STATE: Filters = {
  selectedKeys: [],
};

/**
 *  Config reducer
 */
export const FiltersReducer = (state = INITIAL_STATE, action: FilterAction): Filters => {
  switch (action.type) {
    case FILTERS_ACTIONS_TYPES.SET_FILTERS:
      return {...state, selectedKeys: action?.keys ?? []};
    case FILTERS_ACTIONS_TYPES.RESET_FILTERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
