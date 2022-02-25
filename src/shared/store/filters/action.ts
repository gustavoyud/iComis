import {FilterAction, FILTERS_ACTIONS_TYPES} from './types';

/**
 * Clears the current Config from store
 */
export const resetFilters = (): FilterAction => {
  return {
    type: FILTERS_ACTIONS_TYPES.RESET_FILTERS,
  };
};

/**
 * Set Config list
 *
 * @param config - Config list
 */
export const setFilters = (keys: string[]): FilterAction => {
  return {
    type: FILTERS_ACTIONS_TYPES.SET_FILTERS,
    keys,
  };
};
