import {StyleSheet} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  jokeButton: {
    backgroundColor: BASE_COLORS.primary500,
    padding: 15,
    borderRadius: 4,
  },
  cancelButton: {
    backgroundColor: BASE_COLORS.mainBackground,
    padding: 15,
    borderRadius: 4,
  },
  jokeCard: {
    borderRadius: 8,
    backgroundColor: BASE_COLORS.mainBackground,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jokeResponse: {
    paddingVertical: 15,
  },
  badgeBackground: {
    backgroundColor: BASE_COLORS.border,
    borderRadius: 8,
    height: 20,
    width: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  badgeText: {
    color: BASE_COLORS.textStrong,
    fontSize: 12,
  },
});
