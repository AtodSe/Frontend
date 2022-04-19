import React, {useContext, useEffect} from "react";
import Login from "../../screen/Login";
import Verification from "../../screen/Verification";
import CreateInvoice from "../../screen/CreateInvoice";
import Main from "../../screen/Main";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthContext} from "../../../Context/auth";
import Invoice from "../../screen/Invoice/Invoice";
const Stack = createNativeStackNavigator();
export default function RootNav() {
    const [state,setState] = useContext(AuthContext);
    const authenticated = state && state.data!==null&&state.defaultInvoiceId !==0;
  return(
      <Stack.Navigator
          screenOptions={{headerShown:false}}
      >
          {authenticated
              ?   <Stack.Screen name={'Main'} component={Main}/>
              :
              <>
                  <Stack.Screen name={'Login'} component={Login}/>
                  <Stack.Screen name={'Verification'} component={Verification}/>
                  <Stack.Screen name={'Invoice'} component={Invoice}/>
                  <Stack.Screen name={'CreateInvoice'} component={CreateInvoice}/>
                  <Stack.Screen name={'Main'} component={Main}/>
              </>
          }

      </Stack.Navigator>
  );
}

