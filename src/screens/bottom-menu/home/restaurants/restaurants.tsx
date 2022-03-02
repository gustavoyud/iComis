import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {ROOT_ROUTES} from '~/screens/stack';
import Carousel, {Page} from '~/shared/components/carousel/carousel';
import Filters, {Filter} from '~/shared/components/filters/filters';
import SubCategories, {SubCategory} from '~/shared/components/sub-categories/sub-categories';
import {RootState} from '~/shared/store';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, flex, mt} from '~/shared/styles/utils';
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
 * Component props
 */
type Props = PropsFromRedux & {};

const RestaurantsComponent: FC<Props> = ({filters: {selectedKeys}}) => {
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

  /**
   * Sub category list
   */
  const subCategories: SubCategory<ROOT_ROUTES>[] = [
    {
      label: 'Mercado',
      backgroundColor: BASE_COLORS.greenCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/1/Online-Shopping-Cart-PNG-Photo.png',
      route: ROOT_ROUTES.Store,
      category: 'market',
    },
    {
      label: 'Marmita',
      backgroundColor: BASE_COLORS.redCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/13/Grilled-Transparent-Image.png',
      route: ROOT_ROUTES.Store,
      category: 'marmitation',
    },
    {
      label: 'Pizzas',
      backgroundColor: BASE_COLORS.purpleCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/1/Pizza-PNG.png',
      route: ROOT_ROUTES.Store,
      category: 'pizza',
    },
    {
      label: 'Saudáveis',
      backgroundColor: BASE_COLORS.greenCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/13/Grilled-Transparent-Images.png',
      route: ROOT_ROUTES.Store,
      category: 'health',
    },
    {
      label: 'Doces & Bolos',
      backgroundColor: BASE_COLORS.purpleCategory,
      image: 'https://pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
      route: ROOT_ROUTES.Store,
      category: 'candies&cakes',
    },
    {
      label: 'Lanches',
      backgroundColor: BASE_COLORS.redCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/9/Junk-Food-PNG-Photo-Image.png',
      route: ROOT_ROUTES.Store,
      category: 'launch',
    },
    {
      label: 'Cafeterias',
      backgroundColor: BASE_COLORS.redCategory,
      image: 'https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Transparent-Images.png',
      route: ROOT_ROUTES.Store,
      category: 'coffes',
    },
  ];

  /**
   * Carousel ref
   */
  const carouselPages: Page<ROOT_ROUTES>[] = [
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
    <View style={styles.container}>
      <View style={styles.filtersSection}>
        <Filters filters={filters} />
      </View>
      <View>
        <SubCategories subCategories={subCategories} />

        <View style={mt(15)}>
          <Carousel pages={carouselPages} />
          <View style={[flex('space-between'), mt(30)]}>
            <Text style={filson('Regular', 18, BASE_COLORS.textStrong)}>Últimas lojas</Text>
            <TouchableOpacity>
              <Text style={filson('Regular', 14, BASE_COLORS.primary500)}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <Text style={filson('Regular')}>Scrol View Horizontal com últimas lojas</Text>
        </View>
      </View>
    </View>
  );
};

export default connector(RestaurantsComponent);
