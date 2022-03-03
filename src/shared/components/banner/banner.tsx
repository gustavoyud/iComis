import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

type Props = {
  bannerId: BANNERS;
};

export enum BANNERS {
  gourmet,
  market,
}

const bannerMap = new Map([
  [
    BANNERS.gourmet,
    'https://static-images.ifood.com.br/image/upload/t_high/discoveries/GourmetBisnagaApp1_g6VM.png',
  ],
  [
    BANNERS.market,
    'https://static-images.ifood.com.br/image/upload/t_high/discoveries/ExpressBisnagaBebidas_J7Ur.png',
  ],
]);

const Banner: FC<Props> = ({bannerId}) => {
  return (
    <TouchableOpacity style={styles.overflow}>
      <Image
        source={{
          uri: bannerMap.get(bannerId),
          height: 70,
        }}
        style={styles.resize}
      />
    </TouchableOpacity>
  );
};

export default Banner;
