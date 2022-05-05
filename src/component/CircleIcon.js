import React from "react";
import {View, StyleSheet, Dimensions,Text} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHospital} from "@fortawesome/free-regular-svg-icons/faHospital";

const CircleIcon = (props) => {
  return(
      <View style={styles.iconBox}>
          <View style={[styles.circle,props.circleStyle]}>
              {props.iconDisable?
                  null
                  :
                  <FontAwesomeIcon
                      size={30}
                      icon={faHospital}/>
              }
          </View>
          {props.title?
              <View style={{alignItems:'center' , marginTop:5}}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
              </View>
              :
              null
          }

      </View>
  )
}
const styles = StyleSheet.create({
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
    title:{
        fontSize:14,
        color:'#8A7F9D',
        fontFamily:'Shabnam-FD',
    }
});
export default CircleIcon;
