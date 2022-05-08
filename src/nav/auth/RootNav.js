import React, {useContext, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthContext} from "../../../Context/auth";
import Loader from "../../screen/Loader";
import RootMain from "./RootMain";

const Stack = createNativeStackNavigator();
export default function RootNav() {

    const [load,setLoad]=useState(false)

    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name={'Loader'} component={Loader}/>
            <Stack.Screen name={'RootMain'} component={RootMain}/>
        </Stack.Navigator>
    )

}

