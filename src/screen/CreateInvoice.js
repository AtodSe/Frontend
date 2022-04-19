import React, {useContext, useEffect, useState} from "react";
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    TouchableHighlight,
    Dimensions,
    TouchableOpacity, Modal
} from "react-native";
import CircleColorPicker from "../component/CircleColorPicker";
import InputBox from "../component/InputBox";
import SubmitButton from "../component/SubmitButton";
import axios from "axios";
import {AuthContext} from "../../Context/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CreateInvoice = (props) => {
    const [balance,setBalance] = useState("")
    const [color,setColor] = useState("")
    const [name,setName] = useState("")
    const [state,setState] = useContext(AuthContext);
    const {Token} = props.route.params;
    const pressSubmit = async () => {
        let config = {
            headers: {
                Authorization: 'Bearer '+Token
            }
        }

        const URL = `/invoices/`;
        try {
            const {data} = await axios.post(URL,{
                name: name,
                color: color,
                balance : balance
            },config);
            if (data.success){
                console.log(data)
                let first ={data: data.data[0],token:Token}
                await AsyncStorage.setItem("@defaultInvoiceId",JSON.stringify(data.data.id));
                props.navigation.navigate('Main')
            }

        }catch (e){
            console.log(e.response)
        }
    }


  return(
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.avoidContainer}>
            <View style={styles.header}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>
                        {'برای خود یک حساب ایجاد کنید.'}
                    </Text>
                </View>
                <View style={styles.colorPickerBox}>
                       <CircleColorPicker setSelectColor={setColor}/>
                </View>
            </View>
            <View style={styles.main}>

                <InputBox placeholder={'نام حساب'}
                          value={name} onChangeText={(text)=> setName(text)}
                />
                <InputBox placeholder={'مبلغ موجودی'} keyboardType={'number-pad'}
                    value={balance} onChangeText={(text)=> setBalance(text)}
                />

            </View>
            <View style={styles.footer}>
                <SubmitButton label={"ایجاد"} onPress={()=>pressSubmit(state.data.access?state.data.access:Token)}/>
            </View>

        </KeyboardAvoidingView>
      </View>
  )
}
const styles = StyleSheet.create({
    container : {
        display:"flex",
        flex:1,
        backgroundColor: '#FAF8F0',
        justifyContent:"center",
        alignItems:"center",
    },
    avoidContainer:{
        display:"flex",
        flex:0.9,
        justifyContent:"center"
    },
    footer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        flex:2,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    text:{
        textAlign:"center",
        fontSize:16,
        color:'#8A7F9D',
        fontFamily:'Shabnam',
        lineHeight:26
    },
    textBox:{
        marginVertical:60
    },
    colorPickerBox:{


    }
});
export default CreateInvoice;