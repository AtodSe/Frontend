import React, {useContext, useEffect} from "react";
import {AuthProvider} from "../../../Context/auth";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import RootNav from "./RootNav";

const AuthNav = (props) => {
    useEffect(()=>{
        SplashScreen.hide();
    },[])
    return(
        <NavigationContainer>
            <AuthProvider>
                <RootNav/>
            </AuthProvider>
        </NavigationContainer>
    );
}
export default AuthNav;
