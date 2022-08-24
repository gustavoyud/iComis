import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {mr} from '~/shared/styles/utils';
import {styles} from './style';

type Props = {
  bannerId: BANNERS;
};

export enum BANNERS {
  gourmet,
  market,
}

const bannerMap = new Map([
  [BANNERS.gourmet, require('./images/gourmet.png')],
  [BANNERS.market, require('./images/market.png')],
]);

const Banner: FC<Props> = ({bannerId}) => {
  return (
    <TouchableOpacity style={[styles.overflow, mr(20)]}>
      <Image source={bannerMap.get(bannerId)} style={styles.resize} />
    </TouchableOpacity>
  );
};

export default Banner;
