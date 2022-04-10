import React, {useContext, useEffect} from "react";
import axios from "axios";
import {Text} from "react-native";
import {AuthContext} from "../../../Context/auth";

const Invoice = () => {
    const [state,setState] = useContext(AuthContext);
    const check = async ()=>{
        let config = {
            headers: {
                Authorization: 'Bearer '+state.data.access
            }
        }
        console.log(state)
        console.log('111')
        const URL = `/invoices/`;
        try {
            const {data} = await axios.get(URL,config);
            console.log(data)
        }
        catch (e){
        console.log(e)


    }
    }
    useEffect(()=>{
            check()
    },[])
  return(
      <Text>
          invoice
      </Text>
  )
}

export default Invoice;
