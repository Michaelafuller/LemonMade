import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image, Picker} from 'react-native';
import axios from 'axios';

import colors from '../assets/palette'

function BuyIngredients({navigation}) {
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState(0);
    const [newQuantity, setNewQuantity] = useState(0);
    const [errorList, setErrorList] = useState([]);
    
    const priceHandler = (price) => {
        setNewPrice(price)
    }

    const handleSubmit = () => {
        const newPurchase = {
            name: newName,
            price: newPrice,
            quantity: newQuantity
        };

        axios.post('http://localhost:8000/api/ingredient', newPurchase)
            .then(res => {
                console.log(res);
                setNewName('');
                setNewPrice(0);
                setNewQuantity(0);
            })
            .catch(err => {
                console.log(err);
                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                setErrorList(messages);
            })
    }
    return (
        <View style={styles.background}>
            <View>{errorList}</View>
            <View style={[styles.title, styles.titleBar]}>
                <Text style={{color: colors.cadYellow, fontSize:50}}>LemonMade</Text>
                <Image style={styles.logo} source={{uri: "https://d3gg7p8kl1yfy0.cloudfront.net/detail_Fresh_Squeezed_Lemonade_2.png?mtime=20190711110123&focal=none"}}/>
            </View>
            <View style={styles.body}>
                <View>
                    <Text style={{color: colors.cadYellow}}>I recently bought more...</Text>
                    <View style={{backgroundColor: 'white', marginTop: 20, width: '80%'}}>
                        <Picker selectedValue={newName}
                                onValueChange={newPurchase => setNewName(newPurchase)}>
                            <Picker.Item label='Please Select One'/>
                            <Picker.Item label='Lemons' value='Lemons' />
                            <Picker.Item label='Sugar' value='Bags of Sugar' />
                            <Picker.Item label='Plastic Cups' value='Plastic Cups' />
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color: colors.cadYellow}}>Price</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50}}
                        keyboardType='numeric'
                        onChangeText={priceHandler}
                        value={newPrice}
                    />
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{color: colors.cadYellow}}>Quantity</Text>
                    <TextInput
                        style={{backgroundColor: 'white', height: 40, width:50}}
                        keyboardType='numeric'
                        onChangeText={value => {
                            setNewQuantity(value)
                        }}
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
                    <Button title='Update Inventory' onPress={handleSubmit}></Button>
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

export default BuyIngredients;