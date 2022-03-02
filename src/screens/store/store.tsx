import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Filters, {Filter} from '~/shared/components/filters/filters';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, mb, ml} from '~/shared/styles/utils';
import {ROOT_PARAMS_LIST, ROOT_ROUTES} from '../stack';
import {styles} from './style';
Icon.loadFont();
MaterialCommunityIcons.loadFont();

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

type Business = {
  logo: string;
  name: string;
  key: string;
  category: string;
  categoryLabel: string;
  deliveryFee: number;
  stars: number;
  distance: string;
  estimatedTime: string;
  isFavorite: boolean;
};

const StoreComponent: FC<Props> = ({navigation, route}) => {
  /**
   * A filtered data
   */
  const [filteredData, setFilteredData] = useState();

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
    const data = businnesList.filter(({category}) => category === route?.params?.category);
    setFilteredData(data);
  }, [route]);

  /**
   * Restaurant current filters
   */
  const filters: Filter[] = [
    {
      label: 'Ordenar',
      icon: 'chevron-down',
      key: 'order',
    },
    {
      label: 'Pra retirar',
      icon: 'walk',
      iconPosition: 'left',
      key: 'pickup',
    },
    {
      label: 'Entrega grátis',
      key: 'free-delivery',
    },
    {
      label: 'Vale-refeição',
      icon: 'chevron-down',
      key: 'meal-ticket',
    },
    {
      label: 'Distância',
      icon: 'chevron-down',
      key: 'distance',
    },
    {
      label: 'Entrega parceira',
      key: 'partner-delivery',
    },
    {
      label: 'Super Restaurante',
      key: 'super-restaurants',
    },
    {
      label: 'Filtros',
      key: 'filters',
      icon: 'filter-variant',
    },
  ];

  const businnesList: Business[] = [
    {
      name: 'Mercado do joão',
      stars: 4.9,
      key: 'market-of-joao',
      category: 'market',
      categoryLabel: 'Mercado',
      distance: '4,9',
      estimatedTime: '50-60',
      deliveryFee: 0,
      logo: 'https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Photo.png',
      isFavorite: false,
    },
    {
      name: 'Marmitaria do zé',
      stars: 5.0,
      key: 'arabian',
      category: 'marmitation',
      categoryLabel: 'Marmita',
      distance: '4,9',
      estimatedTime: '50-60',
      deliveryFee: 1.0,
      logo: 'https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Photo.png',
      isFavorite: false,
    },
    {
      name: 'Al Sultan Boqueirão',
      stars: 3.9,
      key: 'arabian',
      category: 'arabian',
      categoryLabel: 'Árabe',
      distance: '4,9',
      estimatedTime: '50-60',
      deliveryFee: 7.99,
      logo: 'https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Photo.png',
      isFavorite: false,
    },
    {
      name: 'Al Sultan Boqueirão',
      stars: 3.9,
      key: 'arabian',
      category: 'arabian',
      categoryLabel: 'Árabe',
      distance: '4,9',
      estimatedTime: '50-60',
      deliveryFee: 7.99,
      logo: 'https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Photo.png',
      isFavorite: false,
    },
    {
      name: 'Al Sultan Boqueirão',
      stars: 3.9,
      key: 'arabian',
      category: 'arabian',
      categoryLabel: 'Árabe',
      distance: '4,9',
      estimatedTime: '50-60',
      deliveryFee: 7.99,
      logo: 'https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Photo.png',
      isFavorite: false,
    },
  ];

  function renderItem({
    name,
    stars,
    categoryLabel,
    distance,
    estimatedTime,
    deliveryFee,
    logo: uri,
  }: Business) {
    return (
      <TouchableOpacity style={flex('space-between')}>
        <View style={flex('flex-start')}>
          <Image style={styles.image} source={{uri}} />
          <View style={ml(10)}>
            <Text style={filson('Bold', 14, BASE_COLORS.textStrong)}>{name}</Text>
            <View style={flex('flex-start')}>
              <Icon name="star" color={BASE_COLORS.secondary500} size={14} />
              <Text style={filson('Bold', 14, BASE_COLORS.secondary500)}>{stars}</Text>
              <View style={styles.goodDot} />
              <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{categoryLabel}</Text>
              <View style={styles.goodDot} />
              <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{distance} KM</Text>
            </View>
            <View style={flex('flex-start')}>
              <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{estimatedTime} min</Text>
              <View style={styles.goodDot} />
              <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>
                {deliveryFee ? `R$${deliveryFee}` : 'Frete grátis'}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={25}
            color={BASE_COLORS.textMedium}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={mb(20)}>
        <Filters filters={filters} />
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={mb(20)} />}
        data={filteredData}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item, index) => `${item.key}-${index}`}
      />
    </View>
  );
};

export default StoreComponent;
