import React from "react";
import {View, StyleSheet, Text, Dimensions} from "react-native";

const MainCard = (props) => {
  return(
      <View style={styles.mainCards}>
          <View style={styles.mainCardsTop}>
              <Text style={styles.mainCardsTopText}> 4,650,000 </Text>
          </View>
          <View style={styles.mainCardsDown}>
              <View style={styles.depositBox}>
                <View style={styles.circle}>

                </View>
                  <Text style={styles.depositText}>
                      2,576,000
                  </Text>
              </View>
              <View style={styles.depositBox}>
                  <View style={styles.circle}>

                  </View>
                  <Text style={styles.depositText}>
                      1,342,500
                  </Text>

              </View>
          </View>
      </View>
  )
}
const styles=StyleSheet.create({
    mainCards:{
        display:"flex",
        backgroundColor:'#5724AB',
        width:370,
        height:130,
        borderRadius:18,
    }
    ,
    mainCardsTop:{
        flex:1,
        alignItems:"flex-start",
        marginLeft:30,
        marginTop:20
    },
    mainCardsTopText:{
        textAlign:"left",
        fontSize:30,
        color:'#FAF8F0',
        fontFamily:'Shabnam',
    },
    mainCardsDown:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:8
    },
    depositBox:{
        marginHorizontal:20,
      flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    depositText:{
        textAlign:"left",
        fontSize:16,
        marginLeft:10,
        color:'#FAF8F0',
        fontFamily:'Shabnam',
    },
    circle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.075,
        height: Dimensions.get('window').width * 0.075,
        backgroundColor:'#FAF8F0',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default MainCard;
