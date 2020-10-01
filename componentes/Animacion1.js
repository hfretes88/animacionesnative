import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Animacion1 = () => {

    return(
        <Text style={styles.texto}>Animacion 1</Text>
    )
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: "center"
    }
});

export default Animacion1;
