
import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

const Animacion2 = () => {

    const [animacion] = useState(new Animated.Value(0)); 

    useEffect(()=>{
        Animated.timing(
            animacion, {
                toValue: 3,
                duration: 2000,
                useNativeDriver: true
            }
        ).start();
    }, []);

    return(
        <Animated.View
            style={[
                styles.caja,
                {
                   transform:[
                       {scaleY: animacion},
                       {scaleX: animacion}
                   ]
                }
            ]}
        >
            
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 50,
        height: 50,
        backgroundColor: '#000'
    }
});

export default Animacion2;
