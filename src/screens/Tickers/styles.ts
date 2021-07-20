import { Platform } from 'react-native';
import { StyleSheet, ViewProps, TextStyle } from 'react-native';

import { Colors, Fonts, scale, screenWidth } from '@/constants';

type StocksProps = {
  container: ViewProps;
  headerContainer: ViewProps;
  header: TextStyle;
};

export const styles = StyleSheet.create<StocksProps>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.alto,
  },
  headerContainer: {
    width: screenWidth,
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.boulder,
  },
  header: {
    fontSize: scale(16),
    fontFamily: Fonts.ROBOTO_MEDIUM,

    ...Platform.select({
      ios: {
        marginBottom: scale(10),
      },
      android: { marginVertical: scale(10) },
    }),
  },
});
