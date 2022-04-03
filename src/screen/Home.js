import React from "react";
import {View, StyleSheet, Dimensions, Text, FlatList, ScrollView} from "react-native";
import Poster from "../component/Poster";
import MainCard from "../component/MainCard";
import Remainder from "../component/Remainder";

const Home = (props) => {
  return(
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.circles}>

            </View>
            <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>حساب پس انداز خودم</Text>
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
            <MainCard/>
          </View>
          <View style={styles.main}>
            <View style={styles.mainTiterBox}>
                <Text style={styles.mainTiter}>
                    ریمایندر ها
                </Text>
            </View>
            <View style={{height:'57%'}}>
              <ScrollView
                  showsVerticalScrollIndicator={false}
              >

                <Remainder backgroundColor={'#FFAA46'}/>
                <Remainder backgroundColor={'#64C7FF'}/>
                  <Remainder backgroundColor={'#FFAA46'}/>
                <Remainder backgroundColor={'#64C7FF'}/>
                <Remainder backgroundColor={'#64C7FF'}/>
                <Remainder backgroundColor={'#64C7FF'}/>
                <Remainder backgroundColor={'#64C7FF'}/>
                  <Remainder backgroundColor={'#FFAA46'}/>
              </ScrollView>
            </View>
          </View>
      </View>
  );
}
const styles= StyleSheet.create({
    container : {
        marginVertical:40,
        display:"flex",
        flex:1,
        backgroundColor: '#FAF8F0',
        justifyContent:"flex-start",

    },
    header:{
        flexDirection:"row-reverse",
        justifyContent: "flex-start",
        alignItems:"center",
        marginHorizontal:30
    },
    circles:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
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
        fontFamily:'Shabnam',
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
        fontSize:22,
        color:'#302B38',
        fontFamily:'Shabnam',
    }

});
export default Home;
