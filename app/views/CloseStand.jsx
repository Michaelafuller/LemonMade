import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Fireworks from './Fireworks2';
import axios from 'axios';

import colors from '../assets/palette'

function CloseStand({navigation}) {
    const [currentStand, setCurrentStand] = useState({});
    const [allTransactions, setAllTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stands/62465222da883a9345827686')
        .then((res)=>setCurrentStand(res.data))
        .catch((err)=>console.log(err))
    
    }, [])


    return (
        <View style={styles.background}>
            <Fireworks/>
            <View style={[styles.title, styles.titleBar]}>
                <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={{color: colors.cadYellow, fontSize: 30, marginBottom: 20, alignSelf: 'center'}}>Today's Session</Text>
                </View>
                <View>
                    <Text style={{color: colors.cadYellow, fontSize: 20, marginBottom: 20}}>Total Sales: ${currentStand.total_sales}</Text>
                    <Text style={{color: colors.cadYellow, fontSize: 20, marginBottom: 20}}>Total Gratuity: ${currentStand.total_tips}</Text>
                    <Text style={{color: colors.cadYellow, fontSize: 20, marginBottom: 20}}>Total Profits: ${currentStand.total_sales}</Text>
                    <Text style={{color: colors.cadYellow, fontSize: 20, marginBottom: 20}}>Total Time: 1 minute</Text>
                </View>
            </View>
            <View>
                <Button title='Dashboard' onPress={() => navigation.navigate('Dashboard')}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.black,
        flex: 1,
        padding: 10,
        paddingTop: 40,
    },
    body: {
        backgroundColor: colors.polishedPine,
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
        marginBottom: 20,
        height: '75%'
    },
    logo: {
        height: 100,
        width: 50,
        marginLeft: 30
    },
    textBody: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 75
    },
    textColor: {
        color: colors.cadYellow,
        fontSize: 20
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        padding: 5,
        backgroundColor: 'white'
    },
    title: {
        backgroundColor: colors.polishedPine,
        color: colors.cadYellow,
        width: '75%',
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

export default CloseStand;