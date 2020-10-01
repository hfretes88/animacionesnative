import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animacion1 from './componentes/Animacion1';
import Animacion2 from './componentes/Animacion2';


const App = () => {
  return(
    <View style={styles.contenido}>
      <Animacion2 />
    </View>
  )
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
    alignItems: 'center'
  }
});

export default App;
