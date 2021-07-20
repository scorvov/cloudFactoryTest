import { StyleSheet, ViewProps } from 'react-native';

import { Colors } from '@/constants';

type AboutProps = {
  container: ViewProps;
};

export const styles = StyleSheet.create<AboutProps>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.alto,
  },
});
