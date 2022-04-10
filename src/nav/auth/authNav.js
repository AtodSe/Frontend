import React from "react";
import {AuthProvider} from "../../../Context/auth";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from '../../screen/Login'
import Verification from "../../screen/Verification";
import Home from "../../screen/Home";
import CreateAccount from "../../screen/CreateAccount";
import {View} from "react-native";
const Stack = createNativeStackNavigator();
const AuthNav = () => {
    return(
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator
                    initialRouteName={'Login'}
                    screenOptions={{headerShown:false}}
                >
                    <Stack.Screen name={'Login'} component={Login}/>
                    <Stack.Screen name={'Verification'} component={Verification}/>
                    <Stack.Screen name={'CreateAccount'} component={CreateAccount}/>
                    <Stack.Screen name={'Home'} component={Home}/>
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
export default AuthNav;
