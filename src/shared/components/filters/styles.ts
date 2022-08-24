import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 32,
    backgroundColor: BASE_COLORS.mainBackground,
    borderColor: BASE_COLORS.border,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reverseRow: {
    flexDirection: 'row-reverse',
  },
  gap: {
    marginRight: 5,
  },
  active: {
    backgroundColor: BASE_COLORS.primaryBackground,
    borderWidth: 1,
  },
});
