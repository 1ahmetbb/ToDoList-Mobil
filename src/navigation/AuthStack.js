import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function AuthStack() {
    return (

            < NavigationContainer >
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer >

    )
}

