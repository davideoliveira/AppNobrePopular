import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import Icon from 'react-native-vector-icons/AntDesign'


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        headerShown={false}
        screenOptions={{
            headerShown: false,
            unmountOnBlur: true,
            // tabBarShowLabel: false,
            tabBarStyle: { height: Platform.OS === 'ios' ? 100 : 50 },
        }}>

        <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{tabBarIcon: () => (
                <Icon name='home' size={25} />
            )}}
            />
        <Tab.Screen 
            name="Settings" 
            component={HomeScreen}
            options={{tabBarIcon: () => (
                <Icon name='shoppingcart' size={25}/>
            )}}
            />
    </Tab.Navigator>
  );
}