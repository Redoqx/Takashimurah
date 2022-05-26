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
            <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false, tabBarActiveTintColor:color.activeColor, tabBarInactiveTintColor:color.iconColor,
                                                                    tabBarStyle:{backgroundColor:color.headerFooterColor,}}}>
                <Tab.Screen name="Home" component={Home} options={{ tabBarIcon:({color})=>(<Feather name="home" size={24} color={color}/>) }}/>
                <Tab.Screen name="Detail" component={Detail} options={{ tabBarIcon:({color})=>(<Feather name="heart" size={24} color={color}/>)}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
