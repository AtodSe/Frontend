import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import {AuthContext} from "../../Context/auth";

const Loader = (props) => {
    const [state,setState] = useContext(AuthContext);
    const [load, setLoad]= useState(false)
    useEffect(()=>{
        if(!load){
            setTimeout(()=>{
                setLoad(true)
                console.log(state&&state.data!=='')

            },2000)
        }
        else {
            console.log(state&&state.data!=='')
            setState((x)=>{
                return {...x,isLogin:state&&state.data!==''}
            })
            props.navigation.navigate('RootMain')
        }

    },[load])
  return(
      <View>
          <ActivityIndicator/>
      </View>
  )
}
export default Loader;
