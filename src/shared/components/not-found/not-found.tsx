import React, {FC} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {BASE_COLORS} from '~/shared/styles/colors';
import {filson, mb, mt} from '~/shared/styles/utils';
import {styles} from './style';

type Props = {
  onButtonPress: () => void;
  buttonText: string;
};

/**
 * Not found component
 */
const NotFound: FC<Props> = ({onButtonPress, buttonText}) => {
  /**
   * Uri reference
   */
  const uri =
    'https://static-images.ifood.com.br/image/upload/t_high/discoveries/001-search-empty-state.png';

  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.image} />

      <View style={[mt(40), mb(20)]}>
        <Text style={filson('Regular', 18, BASE_COLORS.textStrong)}>
          Nenhum resultado encontrado
        </Text>
        <Text style={[filson('Regular', 16, BASE_COLORS.textMedium), mt(10)]}>
          Edite ou limpe os filtros para voltar
        </Text>
      </View>

      <Button color={BASE_COLORS.primary500} title={buttonText} onPress={onButtonPress} />
    </View>
  );
};

export default NotFound;
