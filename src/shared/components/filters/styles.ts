import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '../../styles/colors';

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
  },
  gap: {
    marginRight: 5,
  },
});
