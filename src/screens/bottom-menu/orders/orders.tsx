import React, {FC, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {get} from '~/shared/services/http-client';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, mt} from '~/shared/styles/utils';
import {styles} from './style';

type Props = {};

type Joke = {
  joke?: string;
  response?: string;
  id?: number;
};

const Badge = ({count}: {count: number}) => {
  return (
    <View style={styles.badgeBackground}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

const OrderComponent: FC<Props> = () => {
  /**
   * Loading
   */
  const [loading, setLoading] = useState(false);

  /**
   * Current joke
   */
  const [currentJoke, setCurrentJoke] = useState<Joke>({});

  /**
   * Get joke
   */
  function getJoke() {
    setLoading(true);
    get('joke/list').then(response => {
      const {length} = response;
      const randomIndex = Math.floor(Math.random() * length);
      setCurrentJoke(response[randomIndex ?? 0]);
      setLoading(false);
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={filson('Regular', 16, BASE_COLORS.textStrong, 'center')}>MEUS PEDIDOS</Text>
      <View style={mt(20)}>
        <View style={styles.jokeCard}>
          <Text style={filson('Bold', 20)}>Peça de novo</Text>

          <View style={styles.jokeResponse}>
            {currentJoke?.joke ? (
              <>
                <Text style={filson('Regular')}>{currentJoke?.joke}</Text>
                <Text style={filson('Bold', 14, BASE_COLORS.primary500)}>
                  {currentJoke?.response}
                </Text>
              </>
            ) : (
              <View style={flex('flex-start')}>
                <Badge count={1} />
                <Text style={filson('Regular', 14, BASE_COLORS.textLight)}>
                  Piada muito engraçada
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => getJoke()} style={[styles.jokeButton, flex('center')]}>
            {loading ? (
              <ActivityIndicator color={BASE_COLORS.mainBackground} />
            ) : (
              <Text style={filson('Bold', 14, BASE_COLORS.mainBackground)}>Pedir piadas</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderComponent;
