import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomStackNavigation';

const Stack = createStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator
    initialRouteName='LoginScreen'
    screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: {
        backgroundColor: '#ee125a',
        },
    }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />

    </Stack.Navigator>
  );
}