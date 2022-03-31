import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Dimensions, Easing, Button} from 'react-native';

function Fireworks({navigation}) {
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);

    const fadingOpacity = new Animated.Value(1);
    const movingBall = new Animated.Value(0);
    
    const getRandom = (n) => {
        return Math.round(Math.random() * n)
    };

    useEffect(() => {
        setExplosionSpots();

    }, [])
    
    const setExplosionSpots = () => {
        let density = 5, x =[], y = [];
        
        for(let i = 0; i< density; i++) {
            x[i] = getRandom(Dimensions.get('window').width);
            y[i] = getRandom(Dimensions.get('window').width);
        }

        setX([...x]);
        setY([...y]);
        const runAnimation = () => {
            animateOpacity();
            animateBall();
        }
        runAnimation();
    }

    const animateOpacity = () => {
        fadingOpacity.setValue(1);
        Animated.timing(fadingOpacity, {
            toValue: 0,
            duration: 700,
            easing: Easing.ease,
            useNativeDriver: false
        }).start(() => setExplosionSpots());
    };

    const animateBall = () => {
        movingBall.setValue(0);
        Animated.timing(movingBall, {
            toValue: 1,
            duration: 700,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    };

        let balls = [], randomColors = [], randomTops = [], randomLefts = [];
    
        for(let i = 0; i < 30; i++) {
            balls.push('');
            randomTops[i] = movingBall.interpolate({
                inputRange: [0, 1],
                outputRange: [100, getRandom(200)]
            });
            randomLefts[i] = movingBall.interpolate({
                inputRange: [0, 1],
                outputRange: [100, getRandom(200)]
            })
            randomColors[i] =  
                'rgb(' + getRandom(255) 
                    + ',' + getRandom(255)
                    + ',' + getRandom(255)
                    + ')';
        }
    
        let ballOpacity = fadingOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
    
        return (
            <View>
                <Animated.View style={styles.explosionBoundary}>
                    {balls.map((ball, index) => {
                        return (
                            <Animated.View key={index}
                                style={[styles.ball,
                                    {
                                        top: randomTops[index], 
                                        left: randomLefts[index], 
                                        opacity: ballOpacity, 
                                        backgroundColor: randomColors[index]
                                    }
                                ]}>
                            </Animated.View>
                        );
                    })}
                </Animated.View>
                <View style={{marginTop: '50%'}}>
                    <Button title='Dashboard'
                            onPress={() => navigation.navigate('Dashboard')}>
                    </Button>
                </View>
            </View>
            );
    }




const styles = StyleSheet.create({
    explosionBoundary: {
        position: 'absolute',
        height: 200,
        width: 200,
    },
    ball: {
        position: 'absolute',
        height: 7,
        width: 7,
        borderRadius: 3
    }
})

export default Fireworks;