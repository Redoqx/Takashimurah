import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto,FontAwesome5, Feather} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../config/color'

import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false, tabBarActiveTintColor:color.iconColor}}>
                <Tab.Screen name="Home" component={Home} options={{ tabBarIcon:()=>(<Feather name="home" size={24} color={color.iconColor}/>)}}/>
                <Tab.Screen name="Detail" component={Detail} options={{ tabBarIcon:()=>(<Feather name="heart" size={24} color={color.iconColor}/>)}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
