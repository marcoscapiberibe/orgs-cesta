import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <View>
      <Cesta />
      <StatusBar style="auto" />
    </View>
  );
}

