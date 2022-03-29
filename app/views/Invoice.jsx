import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';

import colors from '../assets/palette';

function Invoice({navigation}) {
    return (
        <View style={styles.background}>
            <View style={[styles.title, styles.titleBar]}>
                <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
            </View>
            <View style={styles.body}>
                <Text style={{color: colors.cadYellow, fontSize: 30, alignSelf: 'center', marginBottom: 20}}>Invoice:</Text>
                <Text style={{color: colors.cadYellow, fontSize: 20}}>3 Lemonades @ $4/each</Text>
                <View>
                    <Text style={{color: colors.cadYellow, fontSize: 20, marginTop: 20}}>Gratuity:</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50}}
                        keyboardType='numeric'
                        placeholder='1'
                    />
                </View>
                <Text style={{color: colors.cadYellow, fontSize: 20, marginTop: 20}}>Total: $13</Text>
                <View style={{marginTop: 20}}>
                    <Button title='Payment Received' onPress={() => navigation.navigate('PaymentReceived')}></Button>
                </View>
            </View>
            <View style={[styles.titleBar, {marginTop: '40%'}]}>
                <Button title='Dashboard' onPress={() => navigation.navigate('Dashboard')}></Button>
                <Button title='Session' onPress={() => navigation.navigate('OpenStand')}></Button>
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
        height: '50%'
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

export default Invoice;