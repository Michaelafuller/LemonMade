import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import axios from 'axios';

import colors from '../assets/palette'

function OpenStand({navigation}) {
    const [currentStand, setCurrentStand] = useState({});
    const [allTransactions, setAllTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stands/62465222da883a9345827686')
        .then((res)=>setCurrentStand(res.data))
        .catch((err)=>console.log(err))
    
    }, [])


    return (
        <View style={styles.background}>
            <View>
                <View style={[styles.title, styles.titleBar]}>
                    <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                    <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
                </View>
                <View style={styles.body}>
                    <View style={styles.textBody}>
                        <Text style={styles.textColor}>Total Sales: ${currentStand.total_sales}</Text>
                        <Text style={styles.textColor}>Total Tips: ${currentStand.total_tips}</Text>
                    </View>
                    <View style={styles.textBody}>
                        <Text style={styles.textColor}>Costs: ${currentStand.total_costs_incured}</Text>
                        <Text style={styles.textColor}>Cups Sold: {currentStand.total_cups}</Text>
                    </View>
                </View>
                <View style={[styles.titleBar, {marginTop: '20%'}]}>
                    <Button title='New Transaction' onPress={() => navigation.navigate('NewTransaction')}></Button>
                    <Button title='Close Stand' onPress={() => navigation.navigate('CloseStand')}></Button>
                </View>
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
        marginTop: 20,
        height: '55%'
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

export default OpenStand;