import React, {useContext, useEffect, useState,} from "react";
import axios from "axios";
import {Text , View} from "react-native";
import {AuthContext} from "../../../Context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Invoice = (props) => {
    const [state,setState] = useContext(AuthContext);
    const[token,setToken] = useState('');
    let Token  = "";
    const {data} = props.route.params;

    const check = async (token)=>{
        console.log('check token : '+token)
        let config = {
            headers: {
                Authorization: 'Bearer '+ token
            }
        }
        const URL = `/invoices/`;
        try {
            const {data} = await axios.get(URL,config);
           if (data.data.length>0){
               console.log(data)
               let first ={data: data.data[0],token:token}
               await AsyncStorage.setItem("@defaultInvoiceId",JSON.stringify(data.data[0].id));
               setState({...state,defaultInvoiceId:data.data[0].id})
               props.navigation.navigate('Main')
           }
           else {
               console.log(data)
               props.navigation.navigate('CreateInvoice',{Token})
           }
        }
        catch (e){
            console.log(e)

        }
    }

    useEffect(()=>{
        Token = data.data.access ?data.data.access : state.data.access
        if (Token !== undefined||Token!==''){
            setToken(Token)
            check(Token)
        }
    },[Token])
  return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>
              {token+" "}
          </Text>
      </View>

  )
}

export default Invoice;
