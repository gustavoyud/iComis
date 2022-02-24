import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '../../../shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.mainBackground,
    paddingHorizontal: 20,
  },
  jokeButton: {
    backgroundColor: BASE_COLORS.primary500,
    padding: 15,
    borderRadius: 4,
  },
  jokeCard: {
    borderRadius: 8,
    borderColor: BASE_COLORS.textLight,
    borderWidth: 1,
    padding: 10,
  },
});
