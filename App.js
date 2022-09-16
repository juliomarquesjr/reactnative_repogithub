import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import AppRotas from './src/routers/AppRotas';

const App = () => {
  return (
    <SafeAreaView style={estilos.principal}>
      <StatusBar
        animated={true}
        backgroundColor="#EEEEEE"
        barStyle={'dark-content'}
      />
      <AppRotas />
    </SafeAreaView>
  );
};
export default App;

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});
