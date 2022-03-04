import React, {FC, useState} from 'react';
import {ActivityIndicator, Alert, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect, ConnectedProps} from 'react-redux';
import {get} from '~/shared/services/http-client';
import {RootState} from '~/shared/store';
import {ClearProducts, RemoveProduct} from '~/shared/store/little-car/actions';
import {totalValue as TotalValue} from '~/shared/store/little-car/reducers';
import {errorMessageMap, paymentMethodMap} from '~/shared/store/little-car/types';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, mb, mt} from '~/shared/styles/utils';
import {styles} from './style';

/**
 * Redux state
 */
const mapState = ({littleCar}: RootState) => ({
  littleCar,
  totalValue: TotalValue(littleCar),
});

const mapDipatch = {
  removeItem: RemoveProduct,
  clearProducts: ClearProducts,
};

/**
 * Redux connector
 */
const connector = connect(mapState, mapDipatch);

/**
 * Redux props
 */
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

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

const OrderComponent: FC<Props> = ({
  littleCar: {products, paymentMethod},
  totalValue,
  clearProducts,
}) => {
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

  /**
   * Buy companies
   */
  function buyCompanies() {
    setLoading(true);

    setTimeout(() => {
      Alert.alert('Erro no pagamento!', errorMessageMap.get(paymentMethod), [
        {text: 'Tudo bem! 🥲'},
      ]);
      setLoading(false);
    }, 500);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={filson('Regular', 16, BASE_COLORS.textStrong, 'center')}>MEUS PEDIDOS</Text>
      {products.length === 0 ? (
        <View style={mt(20)}>
          <View style={[styles.jokeCard, mb(20)]}>
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
      ) : (
        <View style={[styles.jokeCard, mt(20)]}>
          <Text style={[filson('Bold', 20), mb(15)]}>Seu pedido</Text>
          {products.map(product => (
            <View style={[flex('flex-start'), mb(5)]}>
              <Badge count={1} />
              <Text style={filson('Regular', 14, BASE_COLORS.textLight)}>{product.name}</Text>
            </View>
          ))}
          <View style={[mt(15), flex('space-between')]}>
            <Text style={filson('Regular', 15, BASE_COLORS.textLight)}>Valor Total:</Text>
            <Text style={filson('Regular', 15, BASE_COLORS.textStrong)}>
              R${totalValue} milhões
            </Text>
          </View>
          <View style={[mt(15), flex('space-between')]}>
            <Text style={filson('Regular', 15, BASE_COLORS.textLight)}>Forma de pagamento:</Text>
            <Text style={filson('Regular', 15, BASE_COLORS.textStrong)}>
              {paymentMethodMap.get(paymentMethod)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => buyCompanies()}
            style={[styles.jokeButton, flex('center'), mt(20)]}>
            {loading ? (
              <ActivityIndicator color={BASE_COLORS.mainBackground} />
            ) : (
              <Text style={filson('Bold', 14, BASE_COLORS.mainBackground)}>Comprar</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => clearProducts()}
            style={[styles.cancelButton, flex('center')]}>
            <Text style={filson('Regular', 14, BASE_COLORS.primary500)}>Desistir da compra</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default connector(OrderComponent);
