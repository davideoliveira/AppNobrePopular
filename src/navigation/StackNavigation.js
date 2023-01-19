import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

    </Stack.Navigator>
  );
}