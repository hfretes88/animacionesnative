import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, // El valor al que llega 
                duration: 500, // La cantidad de tiempo en llegar al valor seteado.
                useNativeDriver: true
            }
        ).start(); // Va iniciar la animacion 
    }, []);

    return(
        <Animated.View 
            style={{
                opacity: animacion
            }}
        >
            <Text style={styles.texto}>Animacion 1</Text>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: "center"
    }
});

export default Animacion1;
