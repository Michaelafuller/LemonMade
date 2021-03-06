import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import axios from 'axios';

import colors from '../assets/palette';

function Dashboard({navigation}) {
    const [weather, setWeather] = useState({});
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
        axios.get('http://api.weatherapi.com/v1/current.json?key=9dc6cb1818c44e1aa6e13945223003&q=auto:ip&aqi=no')
            .then(res => {
                setWeather({
                    temp: res.data.current.temp_f,
                    condition: res.data.current.condition.text,
                    icon: res.data.current.condition.icon,
                    wind: res.data.current.wind_mph
                })
            })
            .catch(err => console.log(err))
            
        axios.get('http://localhost:8000/api/ingredient')
        .then(res => {
            setIngredients(res.data)
        })
        .catch(err => console.log(err))

    }, [])

    let cupTotal = 0, sugarTotal = 0, lemonTotal = 0;
    const lemonsOnly = ingredients.filter(obj => obj.name === 'Lemons');
    const sugarOnly = ingredients.filter(obj => obj.name === 'Plastic Cups');
    const cupsOnly = ingredients.filter(obj => obj.name === 'Bags of Sugar');
    for(let i = 0; i < lemonsOnly.length; i++) {
        lemonTotal += lemonsOnly[i].quantity;
    };
    for(let i = 0; i < sugarOnly.length; i++) {
        sugarTotal += sugarOnly[i].quantity;
    };
    for(let i = 0; i < cupsOnly.length; i++) {
        cupTotal += cupsOnly[i].quantity;
    };

    return (
        <View style={[styles.background]}>
            <View >
                <View style={[styles.title, styles.titleBar]}>
                    <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                    <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
                </View>
                <Button title="Open Stand" onPress={() => navigation.navigate('Countdown')}></Button>
            </View>
            <View style={[styles.body, {marginTop: 20}]}>
                <View style={styles.titleBar}>
                    <Text style={{color: colors.cadYellow, fontSize: 30}}>Pricing</Text>
                    <Button title="Change Price" onPress={() => navigation.navigate('ChangePrice')}></Button>
                </View>
                <View>
                    <Text>Current Price per Cup: $4</Text>
                    <Text>Lemon per Cup: $0.20</Text>
                    <Text>Each Plastic Cup: $0.10</Text>
                    <View style={styles.titleBar}>
                        <Text>Sugar Mix per Cup: $0.20</Text>
                        <Button title="Change Recipe" onPress={() => navigation.navigate('ChangeRecipe')}></Button>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.titleBar}>
                    <Text style={{color: colors.cadYellow, fontSize: 30, marginBottom:10}}>Inventory</Text>
                    <Button title="Buy Ingredients" onPress={() => navigation.navigate('BuyIngredients')}></Button>
                </View>
                <Text>Bags of Sugar: {sugarTotal}</Text>
                <Text>Lemons: {lemonTotal}</Text>
                <Text>Plastic Cups: {cupTotal}</Text>
            </View>
            <View style={{backgroundColor: colors.polishedPine, borderRadius: 5, marginTop:10}}>
                <Text style={{marginTop: 10, marginLeft: 10, fontSize:20, color: colors.cadYellow}}>Weather</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Image style={{height: 50, width: 50}} source={{uri: "https:"+weather.icon}}/>
                    <Text>{weather.condition}</Text>
                    <Text>{weather.temp}??</Text>
                    <Text>{weather.wind} mph</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.black,
        padding: 10,
        paddingTop: 40
    },
    body: {
        backgroundColor: colors.polishedPine,
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10
    },
    button: {
        height: '100%',
        width: 100
    },
    logo: {
        height: 100,
        width: 50,
        marginLeft: 30
    },
    title: {
        backgroundColor: colors.polishedPine,
        color: colors.cadYellow,
        width: '80%',
        height: 80,
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginBottom: 20
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Dashboard;