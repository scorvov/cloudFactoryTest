import { TextStyle, ViewProps, StyleSheet } from 'react-native';

import { scale, screenHeight, screenWidth, Colors, Fonts } from '@/constants';

type StocksTableStyle = {
  container: ViewProps;
  containerIndicator: ViewProps;
  bottomGradient: ViewProps;
  item: ViewProps;
  name: TextStyle;
  last: TextStyle;
  high: TextStyle;
  percentPositive: TextStyle;
  percentNegative: TextStyle;
  errorContainer: ViewProps;
  errorText: TextStyle;
};
export const styles = StyleSheet.create<StocksTableStyle>({
  container: {
    flex: 1,
    width: '100%',
  },
  containerIndicator: {
    width: '100%',
    height: screenHeight - scale(150),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.alto,
    position: 'absolute',
    zIndex: 200,
  },
  bottomGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: scale(10),
    width: screenWidth,
  },
  item: {
    width: '100%',
    height: scale(50),
    paddingHorizontal: scale(8),
    paddingVertical: scale(8),
    borderBottomWidth: scale(1),
    borderTopWidth: scale(1),
    borderColor: Colors.silver,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: scale(14),
    fontFamily: Fonts.ROBOTO_MEDIUM,
    width: '30%',
  },
  last: {
    fontSize: scale(12),
    fontFamily: Fonts.ROBOTO_REGULAR,
    width: '23,5%',
  },
  high: {
    fontSize: scale(12),
    fontFamily: Fonts.ROBOTO_REGULAR,
    width: '23,5%',
  },
  percentPositive: {
    fontSize: scale(13),
    fontFamily: Fonts.ROBOTO_REGULAR,
    width: '23%',
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    color: Colors.eucalyptus,
    textAlign: 'center',
  },
  percentNegative: {
    fontSize: scale(13),
    fontFamily: Fonts.ROBOTO_REGULAR,
    width: '23%',
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    color: Colors.red,
    textAlign: 'center',
  },
  errorContainer: {
    width: '100%',
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
  },
  errorText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: scale(14),
  },
});
