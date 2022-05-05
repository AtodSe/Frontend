import React, {useContext, useEffect, useState} from "react";
import Login from "../../screen/Auth/Login";
import Verification from "../../screen/Auth/Verification";
import CreateInvoice from "../../screen/Invoice/CreateInvoice";
import Main from "../../screen/Main";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthContext} from "../../../Context/auth";
import Loader from "../../screen/Loader";

const Stack = createNativeStackNavigator();
export default function RootNav() {
    const [state,setState] = useContext(AuthContext);
    const [isLoaded,setIsLoaded] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState(null);

    useEffect(()=>{
        if(!state.loading){
            setState({...state,loading: true})
        }
        if(state.loading){
            setIsAuthenticated(state && state.data!=='')
        }
    },[state.loading])
    const x =(
            <Stack.Navigator
                screenOptions={{headerShown:false}}
                >
                {isAuthenticated
                    ?
                    <Stack.Screen name={'Main'} component={Main}/>
                    :
                    <>
                        <Stack.Screen name={'Login'} component={Login}/>
                        <Stack.Screen name={'Verification'} component={Verification}/>
                    </>
                }
            </Stack.Navigator>)
    return(state.loading?x:<Loader/>)

}

