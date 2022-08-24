import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BASE_COLORS.mainBackground,
    paddingLeft: 20,
    flex: 1,
  },
  filtersSection: {
    paddingVertical: 15,
  },
  mainContainer: {
    flex: 1,
  },
  littleCarContainer: {
    height: 60,
    backgroundColor: BASE_COLORS.primary500,
  },
});
