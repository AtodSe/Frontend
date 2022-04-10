import React from "react";
import {AuthProvider} from "../../../Context/auth";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from '../../screen/Login'
import Verification from "../../screen/Verification";
import Home from "../../screen/Main/Home";
import CreateInvoice from "../../screen/CreateInvoice";
import Invoice from "../../screen/Invoice/Invoice";
import {View} from "react-native";
import Main from "../../screen/Main";
const Stack = createNativeStackNavigator();
const AuthNav = () => {
    return(
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator
                    initialRouteName={'CreateInvoice'}
                    screenOptions={{headerShown:false}}
                >
                    <Stack.Screen name={'Login'} component={Login}/>
                    <Stack.Screen name={'Verification'} component={Verification}/>
                    <Stack.Screen name={'CreateInvoice'} component={CreateInvoice}/>
                    <Stack.Screen name={'Main'} component={Main}/>
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
export default AuthNav;
