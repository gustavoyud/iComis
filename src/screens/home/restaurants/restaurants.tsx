import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type Props = {};

const RestaurantsComponent: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurants Works!</Text>
    </View>
  );
};

export default RestaurantsComponent;
