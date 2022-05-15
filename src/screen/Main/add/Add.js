import React from "react";
import {Text} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddReminder from "./AddReminder";
import AddTransaction from "./AddTransaction";

const Tab = createMaterialTopTabNavigator();

const Add =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="AddReminder" component={AddReminder} />
            <Tab.Screen name="AddTransaction" component={AddTransaction} />
        </Tab.Navigator>
    )
}

export default Add;
