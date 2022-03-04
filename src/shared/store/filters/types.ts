export interface Filters {
  selectedKeys: string[];
}

export enum FILTERS_ACTIONS_TYPES {
  SET_FILTERS = 'SET_FILTERS',
  RESET_FILTERS = 'RESET_FILTERS',
}

interface SetFilters {
  type: typeof FILTERS_ACTIONS_TYPES.SET_FILTERS;
  keys: string[];
}

interface ResetFilters {
  type: typeof FILTERS_ACTIONS_TYPES.RESET_FILTERS;
}

export type FilterAction = ResetFilters | SetFilters;
