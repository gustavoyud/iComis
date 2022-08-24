import {useNavigation} from '@react-navigation/native';
import React, {FC, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex} from '~/shared/styles/utils';
import {styles} from './style';

const {width} = Dimensions.get('window');

export type Page = {
  background: string;
  image: string;
  key?: string;
  label: string;
  route: string;
};

type Props = {
  pages: Page[];
};

const Carousel: FC<Props> = ({pages}) => {
  /**
   * Navigation instance
   */
  const navigation = useNavigation();

  /**
   * Current onboarding page controller
   */
  const [currentPage, setCurrentPage] = useState(0);

  /**
   * Renders the onboarding page item
   *
   * @param page - page options
   */
  const renderItem = ({
    image: uri,
    background: backgroundColor,
    route,
    label,
  }: Page): JSX.Element => {
    return (
      <TouchableOpacity
        onPress={() => route && navigation.navigate?.(route, {name: label})}
        style={[styles.item, flex('flex-start'), {backgroundColor}]}>
        <Image source={{uri}} style={styles.image} />
        <View>
          <Text style={filson('Bold', 16, BASE_COLORS.mainBackground)}>{label}</Text>
          <Text style={filson('Regular', 16, BASE_COLORS.mainBackground)}> em promoção (s)</Text>
        </View>
      </TouchableOpacity>
    );
  };

  /**
   * When page is swiped
   */
  const onSwipePage = useRef(({viewableItems}: any) => {
    if (!viewableItems[0]) {
      return;
    }
    setCurrentPage(viewableItems[0].index);
  });

  /**
   * View reference configuration
   */
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 80});

  return (
    <>
      <FlatList
        key={pages.length}
        pagingEnabled={true}
        onViewableItemsChanged={onSwipePage.current}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        style={{backgroundColor: BASE_COLORS.mainBackground}}
        horizontal={true}
        data={pages}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        initialNumToRender={1}
        extraData={width}
      />
      <View style={styles.pageController}>
        <View style={styles.dots}>
          {pages.map((_, index) => (
            <View
              style={index === currentPage ? {...styles.activeDot} : {...styles.dot}}
              key={index}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default Carousel;
