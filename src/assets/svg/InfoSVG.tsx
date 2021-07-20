import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { scale } from '@/constants/scale';

export const InfoSVG = ({ width = scale(24), height = scale(24), fill = 'none' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <Path
        d="M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21C16.968 21 21 16.968 21 12C21 7.032 16.968 3 12 3ZM12.9 16.5H11.1V11.1H12.9V16.5ZM12.9 9.3H11.1V7.5H12.9V9.3Z"
        fill={fill}
      />
    </Svg>
  );
};
