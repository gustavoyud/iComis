import {Dimensions, StyleSheet} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  dots: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
    backgroundColor: BASE_COLORS.border,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
    backgroundColor: BASE_COLORS.textMedium,
  },
  pageController: {
    marginHorizontal: 32,
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10,
  },
  item: {
    width: width - 80,
    height: 140,
    borderRadius: 12,
    backgroundColor: BASE_COLORS.primary500,
  },
  gap: {
    marginRight: 10,
  },
  image: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
  },
});
