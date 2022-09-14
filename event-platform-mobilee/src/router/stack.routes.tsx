import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Platform } from "../screens/Platform";
import { Subscribe } from "../screens/Subscribe";
import { getItem } from '../asyncstorage/storage';
import { useNavigation } from '@react-navigation/native';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    const navigation = useNavigation()
    
    useEffect(() => {
        async function renderRoute() {
            const userID = await getItem('@USERID')
            if (userID) navigation.navigate('Platform')
        }
        renderRoute()
    })

    return (
        <Navigator 
            initialRouteName='Subscribe' 
            screenOptions={{ 
                headerShown: false,
                animation: 'fade_from_bottom'
            }}
        >
           <Screen name="Subscribe" component={ Subscribe } />
           <Screen name="Platform" component={ Platform } />
        </Navigator>
    )
}