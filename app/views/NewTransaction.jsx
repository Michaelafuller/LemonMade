import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button, Text, Image, Picker} from 'react-native';
import axios from 'axios';

import colors from '../assets/palette'

function NewTransaction({navigation}) {
    const [lemonades, setLemonades] = useState(0);
    const [transaction, setTransaction] = useState({})

    const lemonadeHandler = (number) => {
        setLemonades(number)
    }

    const buyLemonade = () => {
        const updatedTransaction = {
            lemonades: lemonades,
            price: 4*lemonades
        }

        axios.post('http://localhost:8000/api/transactions/', updatedTransaction)
            .then(res => {
                console.log(res.data);
                setTransaction(res.data)
            })
            .catch(err => console.log(err));
        
        navigation.navigate('Invoice');
    }

    return (
        <View style={styles.background}>
            <View style={[styles.title, styles.titleBar]}>
                <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
            </View>
            <View style={styles.body}>
                <View style={{marginTop:15}}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Customer Name...'
                    />
                </View>
                <View>
                    <View style={{backgroundColor: 'white', marginTop: 30, width: '80%'}}>
                        <Picker>
                            <Picker.Item label='Please Select one...' />
                            <Picker.Item label='Lemonade' value='lemonade' />
                            <Picker.Item label='Lemonade Mai Tai' value='lemonadeMaiTai' />
                            <Picker.Item label='Lemonade Royale' value='lemonadeRoyal' />
                            <Picker.Item label='Lemonade Especial' value='lemonadeEspecial' />
                        </Picker>
                    </View>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50, marginTop: 30}}
                        keyboardType='numeric'
                        placeholder='Qty'
                        value={lemonades}
                        onChangeText={lemonadeHandler}
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <Button title='Order' onPress={buyLemonade}></Button>
                </View>
            </View>
            <View style={[styles.titleBar, {marginTop: '35%'}]}>
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

export default NewTransaction;