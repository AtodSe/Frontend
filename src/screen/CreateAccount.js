import React, {useState} from "react";
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


const CreateAccount = () => {
    const [total,setTotal] = useState("")

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
                       <CircleColorPicker/>
                </View>
            </View>
            <View style={styles.main}>

                <InputBox placeholder={'نام حساب'}/>
                <InputBox placeholder={'مبلغ موجودی'} keyboardType={'number-pad'}
                    value={total} onChangeText={(text)=> setTotal(text)}
                />

            </View>
            <View style={styles.footer}>
                <SubmitButton label={"ایجاد"}/>
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
export default CreateAccount;
