
import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

const Animacion2 = () => {

    const [animacion] = useState(new Animated.Value(0)); 

    useEffect(()=>{
        Animated.timing(
            animacion, {
                toValue: 450,
                duration: 1000
            }
        ).start();
    }, []);

    return(
        <Animated.View
            style={[
                styles.caja,
                {
                    width: animacion,
                    height: animacion
                }
            ]}
        >
            
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100
    }
});

export default Animacion2;
