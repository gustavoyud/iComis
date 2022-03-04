import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BASE_COLORS.mainBackground,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  goodDot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: BASE_COLORS.textMedium,
    marginHorizontal: 5,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: BASE_COLORS.border,
  },
});
