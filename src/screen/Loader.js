import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, View, Text,Image, StyleSheet, Dimensions} from "react-native";
import {AuthContext} from "../../Context/auth";
import {useNetInfo} from "@react-native-community/netinfo";
import {API} from "../../config";
import axios from "axios";

const isAvailable = () => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(reject, 300, 'Request timed out');
    });

    const request =axios.head('/auth/login')

    return Promise
        .race([timeout, request])
        .then(response => {return true})
        .catch(error =>  {return false});
}
const Loader = (props) => {
    const [state,setState] = useContext(AuthContext);
    const [load, setLoad]= useState(false);
    const[error , setError] = useState(false)
    const [serverIsAvailable,setServerIsAvailable] = useState(false)
    const [text,setText] = useState('به باهو خوش آمدید')
    const netInfo = useNetInfo();
    const isConnected =netInfo.isConnected

    const check = ()=>{
        const server = isAvailable()
        server.then((result)=>{setServerIsAvailable(result)})
        console.log('serverIsAvailable',serverIsAvailable)
        if(serverIsAvailable && isConnected) {
            setError(false)
            setText('به باهو خوش آمدید')
        }
        if (!serverIsAvailable){
            setError(true)
            setText('مشکل سرور')
        }
        if (!isConnected){
            setError(true)
            setText('مشکل اینترنت')
        }
    }
    useEffect(()=>{
        if (!load) {
            setTimeout(() => {
                setLoad(true)
                //check()
            }, 2000)
        }
        if(load&&!error){
            setState((x)=>{
                return {...x,isLogin:state&&state.data!==''}
            })
            console.log('serverIsAvailable',serverIsAvailable)
            console.log('isConnected',isConnected)
            if(serverIsAvailable && isConnected) {
                setError(false)
                setText('به باهو خوش آمدید')
            }
            props.navigation.navigate('RootMain')
        }
    },[load])
  return(
      <View style={styles.body}>
          <View style={styles.container}>
              <View style={styles.imageBox}>
                  <View style={styles.circle}>
                      <View style={styles.circleIn}>
                          <Image
                              style={{
                                  width: '100%',
                                  height: '100%',
                              }}
                              source={require('../../assets/image/Splash/icon.png')}
                          />
                      </View>
                  </View>
              </View>
              <View style={styles.textBox}>
                  <Text style={styles.titer}>باهو</Text>
                  <ActivityIndicator/>
                  <Text style={[styles.titer,{fontSize: 12}]}>{text}</Text>
              </View>
          </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    body :{
        backgroundColor:'#5724AB',
        flex:1
    },
    imageBox:{
        flex:1.5,
        justifyContent:"flex-end",
    },
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleIn:{
        borderRadius: 82,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox:{
        flex:1,
        justifyContent:"space-around"
    },
    titer:{
        fontFamily:'LalezarRegular',
        fontSize:96,
        color:'#FAF8F0'
    },
});
export default Loader;
