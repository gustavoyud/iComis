import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from '../../shared/styles/colors';
import {FONT_FAMILY_MEDIUM} from '../../shared/styles/typography';
import RestaurantsComponent from './restaurants/restaurants';
import CustomTabBar from './tab-bar/tab-bar';

Icon.loadFont();

/**
 * Routes
 */
export enum HOME_ROUTES {
  Restaurants = 'restaurants-stack',
  Markets = 'markets-stack',
  Drinks = 'drinks-stack',
  Drugstores = 'drugstores-stack',
}

/**
 * Params list
 */
export type RoutesParamList = {
  [HOME_ROUTES.Restaurants]: undefined;
  [HOME_ROUTES.Markets]: undefined;
  [HOME_ROUTES.Drinks]: undefined;
  [HOME_ROUTES.Drugstores]: undefined;
};

/**
 * Top tab navigator
 */
const TopTab = createMaterialTopTabNavigator();

/**
 * Top Tab navigator
 */
export function HomeTopTabNavigator() {
  return (
    <TopTab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: BASE_COLORS.primary700,
        },
        tabBarLabelStyle: {fontFamily: FONT_FAMILY_MEDIUM, fontSize: 15},
        lazy: true,
        tabBarItemStyle: {margin: 0, padding: 0, width: 125},
        tabBarStyle: {elevation: 0, shadowOpacity: 0, borderBottomWidth: 0},
        tabBarActiveTintColor: BASE_COLORS.primary600,
        tabBarInactiveTintColor: BASE_COLORS.textLight,
        tabBarScrollEnabled: true,
      }}>
      <TopTab.Screen
        name={HOME_ROUTES.Restaurants}
        component={RestaurantsComponent}
        options={{
          tabBarLabel: 'Restaurantes',
        }}
      />
      <TopTab.Screen
        name={HOME_ROUTES.Markets}
        component={RestaurantsComponent}
        options={{tabBarLabel: 'Mercados'}}
      />
      <TopTab.Screen
        name={HOME_ROUTES.Drinks}
        component={RestaurantsComponent}
        options={{tabBarLabel: 'Bebidas'}}
      />
      <TopTab.Screen
        name={HOME_ROUTES.Drugstores}
        component={RestaurantsComponent}
        options={{tabBarLabel: 'Farmácias'}}
      />
    </TopTab.Navigator>
  );
}
