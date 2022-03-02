import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_COLORS} from '~/shared/styles/colors';
import {FONT_FAMILY_REGULAR} from '~/shared/styles/typography';
import {TabsStack} from './bottom-menu/tabs';
import StoreComponent from './store/store';

Icon.loadFont();

export enum ROOT_ROUTES {
  Home = 'root-home',
  Store = 'root-store',
}

export type ROOT_PARAMS_LIST = {
  [ROOT_ROUTES.Home]: undefined;
  [ROOT_ROUTES.Store]: {name: string; category: string};
};
/**
 * Stack navigator
 */
const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName={ROOT_ROUTES.Home}>
      <Stack.Screen name={ROOT_ROUTES.Home} component={TabsStack} options={{headerShown: false}} />
      <Stack.Screen
        name={ROOT_ROUTES.Store}
        component={StoreComponent}
        options={{
          headerBackTitleVisible: false,
          headerTitleStyle: {color: BASE_COLORS.textStrong, fontFamily: FONT_FAMILY_REGULAR},
          headerBackImage: () => (
            <Icon name="chevron-left" size={40} color={BASE_COLORS.primary500} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
