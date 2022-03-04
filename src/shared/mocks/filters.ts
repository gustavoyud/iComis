import {Filter} from '../components/filters/filters';

export const FILTERS: Filter[] = [
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
