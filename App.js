import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './app/views/Dashboard';
import OpenStand from './app/views/OpenStand';
import NewTransaction from './app/views/NewTransaction';
import BuyIngredients from './app/views/BuyIngredients';
import Invoice from './app/views/Invoice';
import CloseStand from './app/views/CloseStand';
import PaymentReceived from './app/views/PaymentReceived';
import ChangePrice from './app/views/ChangePrice';
import ChangeRecipe from './app/views/ChangeRecipe';
import Fireworks2 from './app/views/Fireworks2';
import Countdown from './app/views/Countdown';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
        <Stack.Screen name='Countdown' component={Countdown}/>
        <Stack.Screen name='OpenStand' component={OpenStand}/>
        <Stack.Screen name='NewTransaction' component={NewTransaction}/>
        <Stack.Screen name='BuyIngredients' component={BuyIngredients}/>
        <Stack.Screen name='Invoice' component={Invoice}/>
        <Stack.Screen name='CloseStand' component={CloseStand}/>
        <Stack.Screen name='PaymentReceived' component={PaymentReceived}/>
        <Stack.Screen name='ChangePrice' component={ChangePrice}/>
        <Stack.Screen name='ChangeRecipe' component={ChangeRecipe}/>
        <Stack.Screen name='Fireworks2' component={Fireworks2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
