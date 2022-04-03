import React from "react";
import {View, StyleSheet, Dimensions, Text} from "react-native";
import ProgressCircle from  'react-native-progress-circle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import {faHospital} from '@fortawesome/free-regular-svg-icons/faHospital'

const Remainder = (props) => {

  return(
      <View style={[styles.container, props.mainStyle]}>
        <View style={styles.iconBox}>
            <View style={[styles.circle,props.circleStyle]}>

                <FontAwesomeIcon
                    size={25}
                    icon={ faHospital } />

            </View>
        </View>
          <View style={styles.textBox}>
            <Text style={styles.titer}>
                {props.title}
            </Text>
              <Text style={styles.date}>
                  {props.date}
            </Text>
          </View>
          <View style={styles.progressBox}>
              <ProgressCircle
                  percent={props.percent}
                  radius={30}
                  borderWidth={3}
                  color="#5724AB"
                  shadowColor="#E9DBFF"
                  bgColor={'#FAF8F0'}

              >
                  <Text style={styles.percentText}>{`${props.percent}%`}</Text>
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
        backgroundColor:'#FAF8F0',
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
        alignItems: 'center',
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
    },
    percentText:{
        fontSize:18,
        color:'#302B38',
    }
});
export default Remainder;
