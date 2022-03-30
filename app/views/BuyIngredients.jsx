import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image, Picker} from 'react-native';

import colors from '../assets/palette'

function BuyIngredients({navigation}) {
    return (
        <View style={styles.background}>
            <View style={[styles.title, styles.titleBar]}>
                <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={{color: colors.cadYellow}}>I recently bought more...</Text>
                    <View style={{backgroundColor: 'white', marginTop: 20, width: 370}}>
                        <Picker>
                            <Picker.Item label='Lemons' value='lemons' />
                            <Picker.Item label='Sugar' value='sugar' />
                            <Picker.Item label='Plastic Cups' value='plasticCups' />
                            <Picker.Item label='Ice' value='ice' />
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color: colors.cadYellow}}>Price</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50}}
                        keyboardType='numeric'
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color: colors.cadYellow}}>Quantity</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50}}
                        keyboardType='numeric'
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color: colors.cadYellow}}>Servings per Unit</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50}}
                        keyboardType='numeric'
                    />
                </View>
                <View style={{marginTop: 45}}>
                    <Button title='Update Inventory'></Button>
                </View>
            </View>
            <View style={styles.titleBar}>
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

export default BuyIngredients;