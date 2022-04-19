import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet, Dimensions, Text, FlatList, ScrollView} from "react-native";
import Poster from "../../component/Poster";
import MainCard from "../../component/MainCard";
import Remainder from "../../component/Remainder";
import {AuthContext} from "../../../Context/auth";
import axios from "axios";

const Home = () => {
    const [state,setState] = useContext(AuthContext);
    const [invoiceName,setInvoiceName] = useState("");
    const [invoiceColor,setInvoiceColor] = useState("");
    const [invoiceBalance,setInvoiceBalance] = useState("");
    const[token,setToken] = useState('');
    let Token = state.data.access
    const loadFromApi= async(token,id)=> {
        let config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        const URL = `/invoices/`+id;
        try {
            const {data} = await axios.get(URL, config);
            setInvoiceName(data.data.name)
            setInvoiceColor(data.data.color)
            setInvoiceBalance(data.data.balance)
        } catch (e) {
            console.log(e.response)
        }
    }
    useEffect(()=>{
        Token = state.data.access
        if (Token !== undefined){
            loadFromApi(state.data.access,state.defaultInvoiceId)
            setToken(Token)
        }
    },[Token])
    return(
      <View style={styles.container}
      >
        <View style={styles.header}>
            <View style={[styles.circles,{backgroundColor: invoiceColor?invoiceColor:'#FFC1C1'}]}>

            </View>
            <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>{invoiceName}</Text>
            </View>
        </View>
          <View style={styles.posters}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
               <Poster style={{backgroundColor:"#FFAA46"}}/>
               <Poster style={{backgroundColor:"#64C7FF"}}/>
               <Poster style={{backgroundColor:"#FF7171"}}/>
            </ScrollView>
          </View>
          <View style={styles.cards}>
            <MainCard balance={invoiceBalance}/>
          </View>
          <View style={styles.main}>
            <View style={styles.mainTiterBox}>
                <Text style={styles.mainTiter}>
                    ریمایندر ها
                </Text>
            </View>
              <View style={{height:'64%' , paddingBottom:30 ,}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Remainder
                    title={'سفر بوشهر'}
                    date={'تا فردا'}
                    percent={60}
                    circleStyle={{
                        backgroundColor:'#84C4FF'
                    }}

                />
                <Remainder
                    title={'خرید عید'}
                    date={'تا 1/1/1401'}
                    percent={75}
                    circleStyle={{
                        backgroundColor:'#F3BB2C'
                    }}

                />
                <Remainder
                    title={'کتاب'}
                    date={'تا 1/1/1401'}
                    percent={21}
                    circleStyle={{
                        backgroundColor:'#FE54B0'
                    }}

                />
                <Remainder
                    title={'سفر بوشهر'}
                    date={'تا فردا'}
                    percent={60}
                    circleStyle={{
                        backgroundColor:'#84C4FF'
                    }}
                />
                <Remainder
                    title={'سفر بوشهر'}
                    date={'تا فردا'}
                    percent={60}
                    circleStyle={{
                        backgroundColor:'#84C4FF'
                    }}
                />
                <Remainder
                    title={'سفر بوشهر'}
                    date={'تا فردا'}
                    percent={60}
                    circleStyle={{
                        backgroundColor:'#84C4FF'
                    }}
                />
                <Remainder
                    title={'سفر بوشهر'}
                    date={'تا فردا'}
                    percent={60}
                    circleStyle={{
                        backgroundColor:'#84C4FF'
                    }}
                />
                <Remainder
                    title={'سفر بوشهر'}
                    date={'تا فردا'}
                    percent={60}
                    circleStyle={{
                        backgroundColor:'#F3BB2C'
                    }}
                />
            </ScrollView>
              </View>
          </View>
      </View>
  );
}
const styles= StyleSheet.create({
    container : {
        display:"flex",
        flex:1,
        backgroundColor:'#FAF8F0',
        paddingBottom : 22,
        justifyContent:"flex-start",

    },
    header:{
        flexDirection:"row-reverse",
        justifyContent: "flex-start",
        alignItems:"center",
        marginTop:25,
        marginHorizontal:30
    },
    circles:{
        borderRadius: 30,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        backgroundColor:'#62D31D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        textAlign:"center",
        fontSize:18,
        color:'#8A7F9D',
        fontFamily:'ShabnamBold',
        lineHeight:26
    },
    headerTextBox:{
      marginRight:20
    },
    posters:{
        marginVertical:20,
    },
    cards:{
        justifyContent:"center",
        alignItems:"center"
    },
    main:{
        marginHorizontal:30,
    },
    mainTiterBox:{
        marginVertical:15
    },
    mainTiter:{
        textAlign:"right",
        fontSize:20,
        color:'#302B38',
        fontFamily:'ShabnamBold',
    }

});
export default Home;
