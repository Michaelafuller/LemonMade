import React from 'react';
import {View, StyleSheet, Text, Button, Image, TextInput, Picker} from 'react-native';

import colors from '../assets/palette';

function ChangeRecipe({navigation}) {
    return (
        <View style={styles.background}>
            <View style={[styles.title, styles.titleBar]}>
                <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
            </View>
            <View style={styles.body}>
                <View style={{backgroundColor: 'white', marginTop: 10, width: '80%'}}>
                    <Picker>
                        <Picker.Item label='Lemonade' value='lemonade' />
                        <Picker.Item label='Lemonade Mai Tai' value='lemonadeMaiTai' />
                        <Picker.Item label='Lemonade Royale' value='lemonadeRoyal' />
                        <Picker.Item label='Lemonade Especial' value='lemonadeEspecial' />
                    </Picker>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{color: colors.cadYellow, fontSize: 15}}>Lemons per Cup</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50, marginTop: 10}}
                        keyboardType='numeric'
                        placeholder='Qty'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{color: colors.cadYellow, fontSize: 15}}>Sugar Mix per Cup</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50, marginTop: 10}}
                        keyboardType='numeric'
                        placeholder='Qty'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{color: colors.cadYellow, fontSize: 15}}>Garnish per Cup</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50, marginTop: 10}}
                        keyboardType='numeric'
                        placeholder='Qty'
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <Button title="Update Recipe"></Button>
                </View>
            </View>
            <View style={[styles.titleBar, {marginTop: 20}]}>
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
        height: '70%'
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

export default ChangeRecipe;