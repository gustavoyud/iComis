import {Business} from '~/shared/components/business-item/business-item';

export enum PAYMENT_METHOD {
  goldenBars = 0,
  cattle = 1,
  card = 2,
}

export const paymentMethodMap = new Map([
  [PAYMENT_METHOD.goldenBars, 'Barras de ouro'],
  [PAYMENT_METHOD.cattle, 'Gado'],
  [PAYMENT_METHOD.card, 'Cartão'],
]);

export const errorMessageMap = new Map([
  [PAYMENT_METHOD.goldenBars, 'Suas barras de ouro eram falsificadas!'],
  [PAYMENT_METHOD.cattle, 'Desculpe nós só aceitamos gado nobre!'],
  [
    PAYMENT_METHOD.card,
    'Desculpe pelo transtorno, mas nós não aceitamos cartão (é coisa de pobre). O estagiário deve ter adicionado sem querer!',
  ],
]);

export interface LittleCar {
  products: Business[];
  paymentMethod: PAYMENT_METHOD;
}

export enum LITTLE_CAR_ACTIONS_TYPES {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_PRODUCTS = 'CLEAR_PRODUCTS',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
}

interface AddProduct {
  type: typeof LITTLE_CAR_ACTIONS_TYPES.ADD_PRODUCT;
  product: Business;
}

interface RemoveProduct {
  type: typeof LITTLE_CAR_ACTIONS_TYPES.REMOVE_PRODUCT;
  key: string;
}

interface ClearProducts {
  type: typeof LITTLE_CAR_ACTIONS_TYPES.CLEAR_PRODUCTS;
}

interface SetPaymentMethod {
  type: typeof LITTLE_CAR_ACTIONS_TYPES.SET_PAYMENT_METHOD;
  paymentMethod: PAYMENT_METHOD;
}

export type LittleCarAction = AddProduct | RemoveProduct | ClearProducts | SetPaymentMethod;
