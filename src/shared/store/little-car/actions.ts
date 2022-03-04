import {Business} from '~/shared/components/business-item/business-item';
import {LittleCarAction, LITTLE_CAR_ACTIONS_TYPES, PAYMENT_METHOD} from './types';

export const AddProduct = (product: Business): LittleCarAction => {
  return {
    type: LITTLE_CAR_ACTIONS_TYPES.ADD_PRODUCT,
    product,
  };
};

export const RemoveProduct = (key: string): LittleCarAction => {
  return {
    type: LITTLE_CAR_ACTIONS_TYPES.REMOVE_PRODUCT,
    key,
  };
};

export const ClearProducts = (): LittleCarAction => {
  return {
    type: LITTLE_CAR_ACTIONS_TYPES.CLEAR_PRODUCTS,
  };
};

export const SetPaymentMethod = (paymentMethod: PAYMENT_METHOD): LittleCarAction => {
  return {
    type: LITTLE_CAR_ACTIONS_TYPES.SET_PAYMENT_METHOD,
    paymentMethod,
  };
};
