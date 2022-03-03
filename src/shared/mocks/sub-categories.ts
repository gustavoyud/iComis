import {ROOT_ROUTES} from '~/screens/stack';
import {SubCategory} from '../components/sub-categories/sub-categories';
import {BASE_COLORS} from '../styles/colors';

/**
 * Sub category list
 */
export const SUB_CATEGORIES: SubCategory[] = [
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
