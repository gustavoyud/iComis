import {LittleCar, LittleCarAction, LITTLE_CAR_ACTIONS_TYPES, PAYMENT_METHOD} from './types';

const INITIAL_STATE: LittleCar = {
  products: [],
  paymentMethod: PAYMENT_METHOD.card,
};

export const LittleCarReducer = (state = INITIAL_STATE, action: LittleCarAction): LittleCar => {
  switch (action.type) {
    case LITTLE_CAR_ACTIONS_TYPES.ADD_PRODUCT:
      if (state.products.find(({key}) => key === action.product.key)) {
        return state;
      }
      return {...state, products: [...state?.products, action.product]};
    case LITTLE_CAR_ACTIONS_TYPES.REMOVE_PRODUCT:
      return {...state, products: state.products.filter(({key}) => key !== action.key)};
    case LITTLE_CAR_ACTIONS_TYPES.CLEAR_PRODUCTS:
      return {...state, products: []};
    case LITTLE_CAR_ACTIONS_TYPES.SET_PAYMENT_METHOD:
      return {...state, paymentMethod: action.paymentMethod};
    default:
      return state;
  }
};

export function totalValue(state: LittleCar) {
  return state.products.reduce((ac, {valuation}) => ac + valuation, 0);
}
