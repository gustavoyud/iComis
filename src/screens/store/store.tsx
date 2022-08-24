import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import BusinessList, {Business} from '~/shared/components/business-item/business-item';
import Filters from '~/shared/components/filters/filters';
import {FILTERS} from '~/shared/mocks/filters';
import {BUSINESS_LIST} from '~/shared/mocks/stores';
import {mb} from '~/shared/styles/utils';
import {ROOT_PARAMS_LIST, ROOT_ROUTES} from '../stack';
import {styles} from './style';

/**
 * Navigation props config
 */
type NavigationProps = StackNavigationProp<ROOT_PARAMS_LIST, ROOT_ROUTES.Store>;

/**
 * Route props
 */
type RouteProps = RouteProp<ROOT_PARAMS_LIST, ROOT_ROUTES.Store>;

/**
 * Component Props
 */
type Props = {
  navigation: NavigationProps;
  route: RouteProps;
};

const StoreComponent: FC<Props> = ({navigation, route}) => {
  /**
   * A filtered data
   */
  const [filteredData, setFilteredData] = useState<Business[]>([]);

  /**
   * Use layout effect
   */
  useLayoutEffect(() => {
    navigation.setOptions({title: route?.params?.name});
  }, [navigation, route]);

  /**
   * Use effect
   */
  useEffect(() => {
    const data = BUSINESS_LIST.filter(({category}) => category === route?.params?.category);
    setFilteredData(data);
  }, [route]);

  return (
    <View style={styles.container}>
      <View style={mb(20)}>
        <Filters filters={FILTERS} />
      </View>
      <BusinessList list={filteredData} />
    </View>
  );
};

export default StoreComponent;
