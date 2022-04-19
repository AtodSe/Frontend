import React from "react";
import {View, Text, StyleSheet, TextInput, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import CircleIcon from "../component/CircleIcon";
import BalanceProgressBar from "../component/BalanceProgressBar";
import DateProgressBar from "../component/DateProgressBar";
import Remainder from "../component/Remainder";
import TransactionCard from "../component/TransactionCard";
const RemainderDetail = () => {
  return(
      <View style={styles.container}>
          <View style={styles.header}>
              <View>
                  <CircleIcon circleStyle={{backgroundColor:'#F3BB2C'}}/>
              </View>
              <View>
                  <Text style={styles.textTitle}>
                      خرید عید
                  </Text>
              </View>
          </View>
          <View style={styles.progressBars}>
            <View>
                <BalanceProgressBar bgcolor={"#6a1b9a"} completed={80}/>
            </View>
            <View>
                <DateProgressBar bgcolor={"#16B58F"} completed={80}/>
            </View>
          </View>
          <View style={styles.detail}>
            <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.detailTextInput}
            />
          </View>
          <View style={styles.transaction}>
              <View style={styles.transactionHeader}>
                <TouchableOpacity style={styles.circle}>
                    <Text style={{color:'#5724AB',fontSize:40}}>+</Text>
                </TouchableOpacity>
                  <Text style={styles.transactionHeaderText}>اضافه کردن یک تراکنش</Text>
              </View>
              <View style={{height:'97%' , paddingBottom:30, alignItems:'center'}}>
                  <ScrollView
                      showsVerticalScrollIndicator={false}
                  >
                      <TransactionCard
                          title={'سفر بوشهر'}
                          date={'تا فردا'}
                          percent={60}
                          circleStyle={{
                              backgroundColor:'#84C4FF'
                          }}

                      />
                      <TransactionCard
                          title={'خرید عید'}
                          date={'تا 1/1/1401'}
                          percent={75}
                          circleStyle={{
                              backgroundColor:'#F3BB2C'
                          }}

                      />
                      <TransactionCard
                          title={'خرید عید'}
                          date={'تا 1/1/1401'}
                          percent={75}
                          circleStyle={{
                              backgroundColor:'#F3BB2C'
                          }}

                      />
                  </ScrollView>
              </View>
          </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAF8F0',
        flex:1,
        marginHorizontal:20,
    },
    header:{
        marginTop:40,
        flex:0.07,
        flexDirection:"row-reverse",
        alignItems:"center"

    },
    progressBars:{
        marginVertical:40,
        flexDirection:"column",
        flex:0.21,
        justifyContent:"space-between",
    },
    detail:{
        flex:0.3,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#5724AB',
        padding:10,
        marginVertical:20
    },
    transaction:{
        flex:0.5,
    },
    transactionHeader:{
        flexDirection:"row-reverse",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:25,
        marginVertical:10,
    },
    transactionHeaderText:{
        textAlign:"center",
        fontSize:14,
        color:'#8A7F9D',
        fontFamily:'Shabnam',
        marginHorizontal:10,
    },
    textTitle:{
        textAlign:"center",
        fontSize:18,
        color:'#302B38',
        fontFamily:'ShabnamBold',
        lineHeight:26
    },
    detailTextInput:{
        fontSize:18,
        fontFamily:'Shabnam',
        textAlign:"right",
        textAlignVertical :"top"
    },
    circle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.13,
        height: Dimensions.get('window').width * 0.13,
        backgroundColor:'#FAF8F0',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});
export default RemainderDetail;
