import React from "react";
import {View, StyleSheet, Dimensions, Text} from "react-native";
import ProgressCircle from  'react-native-progress-circle';

const Remainder = (props) => {
  return(
      <View style={[styles.container, {backgroundColor:props.backgroundColor}]}>
        <View style={styles.iconBox}>
            <View style={styles.circle}>

            </View>
        </View>
          <View style={styles.textBox}>
            <Text style={styles.titer}>
                سفر بوشهر
            </Text>
              <Text style={styles.date}>
                  تا فردا
            </Text>
          </View>
          <View style={styles.progressBox}>
              <ProgressCircle
                  percent={30}
                  radius={30}
                  borderWidth={3}
                  color="#5724AB"
                  shadowColor="#E9DBFF"
                  bgColor={props.backgroundColor}

              >
                  <Text style={{ fontSize: 16 }}>{'30%'}</Text>
              </ProgressCircle>
          </View>
      </View>
  );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row-reverse",
        backgroundColor:'#A6D4FF',
        width:340,
        height:70,
        borderRadius:20,
        marginVertical:6
    },
    iconBox:{
        flex:1,
      marginHorizontal:8
    },
    circle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.14,
        height: Dimensions.get('window').width * 0.14,
        backgroundColor:'#FAF8F0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox:{
        flex:3
    },
    titer:{
        textAlign:"right",
        fontSize:16,
        marginLeft:10,
        color:'#302B38',
        fontFamily:'Shabnam',
    },
    date:{
        textAlign:"right",
        fontSize:16,
        marginLeft:10,
        color:'#8A7F9D',
        fontFamily:'Shabnam',
    },
    progressBox:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:8
    }
});
export default Remainder;
