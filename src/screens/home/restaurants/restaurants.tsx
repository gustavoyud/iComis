import React, {FC, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {get} from '../../../shared/services/http-client';
import {BASE_COLORS} from '../../../shared/styles/colors';
import {filson, flex, mt} from '../../../shared/styles/utils';
import {styles} from './styles';

type Props = {};

type Joke = {
  joke?: string;
  response?: string;
  id?: number;
};

const RestaurantsComponent: FC<Props> = () => {
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
    <View style={styles.container}>
      <Text style={filson('Regular')}>Filtros</Text>
      <Text style={filson('Regular')}>Scroll View Horizontal</Text>
      <Text style={filson('Regular')}>Carrosell</Text>
      <Text style={filson('Regular')}>Scrol View Horizontal com últimas lojas</Text>

      <View style={mt(40)}>
        {currentJoke.joke && (
          <View style={styles.jokeCard}>
            <Text style={filson('Regular')}>{currentJoke?.joke}</Text>
            <Text style={filson('Bold', 14, BASE_COLORS.primary500)}>{currentJoke?.response}</Text>
          </View>
        )}
        {!currentJoke?.joke && (
          <TouchableOpacity onPress={() => getJoke()} style={[styles.jokeButton, flex('center')]}>
            {loading ? (
              <ActivityIndicator color={BASE_COLORS.mainBackground} />
            ) : (
              <Text style={filson('Regular', 14, BASE_COLORS.mainBackground)}>Pedir piadas</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RestaurantsComponent;
