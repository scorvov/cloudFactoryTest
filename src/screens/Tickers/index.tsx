import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { observer } from 'mobx-react';

import { TickersStoreContext } from '@/stores';
import { TickersTable } from './components/TickersTable';
import { styles } from './styles';

export const Tickers = observer(() => {
  const tickersStore = useContext(TickersStoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Котировки</Text>
      </View>
      <TickersTable data={tickersStore.tickersTransform} status={tickersStore.status} />
    </SafeAreaView>
  );
});
