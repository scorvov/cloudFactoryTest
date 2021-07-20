import { Dimensions, PixelRatio } from 'react-native';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const horizontalScaleNew = screenWidth / 375;
const verticalScaleNew = screenHeight / 812;

export const scale = (size: number, based = 'horizontal') => {
  const newSize = based === 'vertical' ? size * verticalScaleNew : size * horizontalScaleNew;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) || 1;
};
