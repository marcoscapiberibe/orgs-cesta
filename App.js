import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

