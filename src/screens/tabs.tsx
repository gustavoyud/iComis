import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from '../shared/styles/colors';
import {HomeTopTabNavigator} from './home/tabs';
import OrderComponent from './orders/orders';

Icon.loadFont();

/**
 * Routes
 */
export enum ROUTES {
  Home = 'home-stack',
  Search = 'search-stack',
  Order = 'order-stack',
  Profile = 'profile-stack',
}

/**
 * Params list
 */
export type RoutesParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Search]: undefined;
  [ROUTES.Order]: undefined;
  [ROUTES.Profile]: undefined;
};

/**
 * Tab bottom navigator
 */
const Tab = createMaterialBottomTabNavigator();

/**
 * Bottom tab navigation
 */
export function TabsStack() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: BASE_COLORS.mainBackground}}
      shifting={false}
      activeColor={BASE_COLORS.textStrong}
      inactiveColor={BASE_COLORS.textLight}>
      <Tab.Screen
        name={ROUTES.Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color}) => <Icon name="home" size={26} color={color} />,
        }}
        component={HomeTopTabNavigator}
      />
      <Tab.Screen
        name={ROUTES.Search}
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({color}) => <Icon name="search" size={26} color={color} />,
        }}
        component={HomeTopTabNavigator}
      />
      <Tab.Screen
        name={ROUTES.Order}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({color}) => <Icon name="receipt-long" size={26} color={color} />,
        }}
        component={OrderComponent}
      />
      <Tab.Screen
        name={ROUTES.Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => <Icon name="person" size={26} color={color} />,
        }}
        component={HomeTopTabNavigator}
      />
    </Tab.Navigator>
  );
}
