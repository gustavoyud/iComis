import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import React, {FC} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {ROOT_ROUTES} from '~/screens/stack';
import Banner, {BANNERS} from '~/shared/components/banner/banner';
import {default as BusinessList} from '~/shared/components/business-item/business-item';
import Carousel, {Page} from '~/shared/components/carousel/carousel';
import Filters from '~/shared/components/filters/filters';
import SubCategories from '~/shared/components/sub-categories/sub-categories';
import {FILTERS} from '~/shared/mocks/filters';
import {BUSINESS_LIST} from '~/shared/mocks/stores';
import {SUB_CATEGORIES} from '~/shared/mocks/sub-categories';
import {RootState} from '~/shared/store';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, mb, mr, mt} from '~/shared/styles/utils';
import {ROUTES, RoutesParamList} from '../../tabs';
import {styles} from './styles';

/**
 * Redux state
 */
const mapState = ({filters}: RootState) => ({filters});

/**
 * Redux connector
 */
const connector = connect(mapState);

/**
 * Redux props
 */
type PropsFromRedux = ConnectedProps<typeof connector>;

/**
 * Navigation props config
 */
type NavigationProps = MaterialBottomTabNavigationProp<RoutesParamList, ROUTES.Home>;

/**
 * Component props
 */
type Props = PropsFromRedux & {
  navigation: NavigationProps;
};

const RestaurantsComponent: FC<Props> = ({filters: {selectedKeys}, navigation}) => {
  /**
   * Carousel ref
   */
  const carouselPages: Page[] = [
    {
      label: 'Cafeterias',
      background: BASE_COLORS.redCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Transparent-Images.png',
      route: ROOT_ROUTES.Store,
    },
    {
      label: 'Saudáveis',
      background: BASE_COLORS.greenCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/9/Junk-Food-PNG-Photo-Image.png',
      route: ROOT_ROUTES.Store,
    },
    {
      label: 'Pizzas',
      background: BASE_COLORS.purpleCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/1/Pizza-PNG.png',
      route: ROOT_ROUTES.Store,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.filtersSection}>
        <Filters filters={FILTERS} />
      </View>
      <View>
        <SubCategories subCategories={SUB_CATEGORIES} />

        <View style={[mt(15), mb(20)]}>
          <Carousel pages={carouselPages} />
          <View style={[flex('space-between'), mt(20), mb(20), mr(20)]}>
            <Text style={filson('Regular', 18, BASE_COLORS.textStrong)}>Últimas lojas</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.Order)}>
              <Text style={filson('Regular', 14, BASE_COLORS.primary500)}>Ver mais</Text>
            </TouchableOpacity>
          </View>

          <BusinessList list={BUSINESS_LIST} isShort />
        </View>

        <Banner bannerId={BANNERS.market} />

        <View style={[mt(15), mb(20)]}>
          <View style={[flex('space-between'), mt(20), mb(20), mr(20)]}>
            <Text style={filson('Regular', 18, BASE_COLORS.textStrong)}>Famosos no iComis</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.Order)}>
              <Text style={filson('Regular', 14, BASE_COLORS.primary500)}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <BusinessList list={BUSINESS_LIST} isShort />
        </View>

        <Banner bannerId={BANNERS.gourmet} />

        <View style={mr(20)}>
          <Text style={[filson('Regular', 18, BASE_COLORS.textStrong), mt(25), mb(15)]}>Lojas</Text>
          <BusinessList list={BUSINESS_LIST} />
        </View>
      </View>
    </ScrollView>
  );
};

export default connector(RestaurantsComponent);
