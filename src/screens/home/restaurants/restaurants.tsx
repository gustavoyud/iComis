import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Filters, {Filter} from '../../../shared/components/filters/filters';
import {filson, mt} from '../../../shared/styles/utils';
import {styles} from './styles';

type Props = {};

const RestaurantsComponent: FC<Props> = () => {
  const filters: Filter[] = [
    {
      label: 'Ordenar',
      icon: 'home',
      iconPosition: 'right',
      isActive: false,
      key: 'order',
    },
    {
      label: 'Pra retirar',
      icon: 'home',
      iconPosition: 'left',
      isActive: false,
      key: 'pickup',
    },
  ];

  return (
    <View style={styles.container}>
      <Filters filters={filters} />
      <View style={mt(15)}>
        <Text style={filson('Regular')}>Scroll View Horizontal</Text>
        <Text style={filson('Regular')}>Carrosell</Text>
        <Text style={filson('Regular')}>Scrol View Horizontal com últimas lojas</Text>
      </View>
    </View>
  );
};

export default RestaurantsComponent;
