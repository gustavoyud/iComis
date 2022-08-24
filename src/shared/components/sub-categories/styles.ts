import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  category: {
    height: 40,
    width: 110,
    borderRadius: 8,
  },
  absoluteImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
    top: 0,
  },
  imageContainer: {
    height: 80,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
