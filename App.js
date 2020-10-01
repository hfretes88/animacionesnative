import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animacion1 from './componentes/Animacion1';

const App = () => {
  return(
    <View style={styles.contenido}>
      <Animacion1 />
    </View>
  )
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 300
  }
});

export default App;
