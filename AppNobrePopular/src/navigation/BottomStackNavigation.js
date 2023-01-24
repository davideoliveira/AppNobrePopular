import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import OfertaScreen from '../screens/OfertaScreen';
import PerfilScreen from '../screens/PerfilScreen';

import Header from '../constants/Header';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        options={{header: () => (<Header/>)
       }}
        screenOptions={{
            unmountOnBlur: true,
            tabBarStyle: { height: Platform.OS === 'ios' ? 100 : 60 },
        }}>

        <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{tabBarIcon: () => (<Image style={{width: 35, height: 35}} source={require('../../assets/icons/home.png')}/>),
                     header: () => (<Header/>)
            }}
            />
        <Tab.Screen 
            name="Ofertas" 
            component={OfertaScreen}
            options={{tabBarIcon: () => (<Image style={{width: 35, height: 35}} source={require('../../assets/icons/ticket.png')}/>),
                    header: () => (<Header/>)
            }}
            />
        <Tab.Screen 
            name="Perfil" 
            component={PerfilScreen}
            options={{tabBarIcon: () => (<Image style={{width: 35, height: 35}} source={require('../../assets/icons/user.png')}/>),
                    header: () => (<Header/>)
            }}
            />
        
    </Tab.Navigator>
  );
}