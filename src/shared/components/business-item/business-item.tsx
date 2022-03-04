import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, mb, ml, mt} from '~/shared/styles/utils';
import NotFound from '../not-found/not-found';
import {styles} from './styles';

Icon.loadFont();
MaterialCommunityIcons.loadFont();

export type Business = {
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
  isOpened?: boolean;
  isShort?: boolean;
  onFavoritePress?: () => void;
};

const BusinessItem: FC<Business> = ({
  name,
  stars,
  categoryLabel,
  distance,
  estimatedTime,
  deliveryFee,
  logo: uri,
  isFavorite,
  isOpened = true,
  isShort = false,
  onFavoritePress,
}) => {
  return !isShort ? (
    <TouchableOpacity style={flex('space-between')}>
      <View style={flex('flex-start')}>
        <Image style={[styles.image, !isOpened && styles.disabled]} source={{uri}} />
        <View style={ml(10)}>
          <Text
            style={filson('Bold', 14, isOpened ? BASE_COLORS.textStrong : BASE_COLORS.textMedium)}>
            {name}
          </Text>
          <View style={[flex('flex-start'), mt(3)]}>
            <Icon
              name="star"
              color={isOpened ? BASE_COLORS.secondary500 : BASE_COLORS.textMedium}
              size={14}
            />
            <Text
              style={filson(
                'Bold',
                14,
                isOpened ? BASE_COLORS.secondary500 : BASE_COLORS.textMedium,
              )}>
              {stars}
            </Text>
            <View style={styles.goodDot} />
            <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{categoryLabel}</Text>
            <View style={styles.goodDot} />
            <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{distance} KM</Text>
          </View>
          <View style={[flex('flex-start'), mt(7)]}>
            {isOpened ? (
              <Text style={filson('Regular', 14, BASE_COLORS.textMedium)}>{estimatedTime} min</Text>
            ) : (
              <Text style={filson('Bold', 14, BASE_COLORS.textMedium)}>Loja fechada</Text>
            )}
            <View style={styles.goodDot} />
            <Text
              style={filson(
                'Regular',
                14,
                deliveryFee ? BASE_COLORS.textMedium : BASE_COLORS.textSuccess,
              )}>
              {deliveryFee ? `R$${deliveryFee} milhões` : 'Grátis'}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onFavoritePress}>
        <MaterialCommunityIcons
          name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
          size={25}
          color={isFavorite ? BASE_COLORS.primary500 : BASE_COLORS.textMedium}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.column}>
      <Image style={[styles.image, !isOpened && styles.disabled]} source={{uri}} />
      <Text
        lineBreakMode="tail"
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[
          filson(
            'Regular',
            14,
            isOpened ? BASE_COLORS.textMedium : BASE_COLORS.textLight,
            'center',
          ),
          mt(10),
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

type BusinessProps = {
  list: Business[];
  isShort?: boolean;
};

/**
 * Business list
 */
const BusinessList: FC<BusinessProps> = ({list, isShort = false}) => {
  /**
   * Selected
   */
  const [selected, setRepeatType] = useState(new Map());

  /**
   * Select filter
   *
   * @param filter - filter to be applied
   */
  function selectFilter(filter: string) {
    const currentSelected = new Map(selected);

    if (!currentSelected.get(filter)) {
      currentSelected.set(filter, !selected.get(filter));
    } else {
      currentSelected.delete(filter);
    }

    setRepeatType(currentSelected);
  }

  /**
   * Navigation ref
   */
  const navigation = useNavigation();

  return (
    <FlatList
      ListEmptyComponent={() => (
        <NotFound buttonText="Voltar" onButtonPress={() => navigation.goBack()} />
      )}
      horizontal={isShort}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={mb(20)} />}
      data={list}
      renderItem={({item, index}) => (
        <BusinessItem
          {...item}
          isFavorite={selected.get(`${item.key}-${index}`)}
          onFavoritePress={() => selectFilter(`${item.key}-${index}`)}
          isShort={isShort}
        />
      )}
      keyExtractor={(item, index) => `${item.key}-${index}`}
    />
  );
};

export default BusinessList;
