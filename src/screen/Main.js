import React, {useContext, useEffect, useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Main/Home";
import Reminder from "./Main/Reminder";
import Diagram from "./Main/Diagram";
import Transaction from "./Main/Transaction";
import {Image, StyleSheet, View} from 'react-native'
import {AuthContext} from "../../Context/auth";


const Tab = createBottomTabNavigator();

const Main = () => {

    return(
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
            tabBarShowLabel:false,
            headerShown: false,
            showIcon: true,
            tabBarStyle:{
                position:'absolute',
                bottom:15,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#fff',
                borderRadius:60,
                height:60,
                ...styles.shadow

            }
        }}>
            <Tab.Screen name="Diagram" component={Diagram}
                        options={
                            {
                                tabBarIcon:({focused})=>{
                                    const image = focused
                                        ? require('../../assets/image/tabBarIcons/chartSelect.png')
                                        : require('../../assets/image/tabBarIcons/chart.png')
                                    return(
                                        <Image source={image}/>
                                    )
                                }
                            }
                        }
            />
            <Tab.Screen name="Reminder" component={Reminder}
                        options={
                            {
                                tabBarIcon:({focused})=>{
                                    const image = focused
                                        ? require('../../assets/image/tabBarIcons/remindSelect.png')
                                        : require('../../assets/image/tabBarIcons/remind.png')
                                    return(
                                        <Image source={image}/>
                                    )
                                }
                            }
                        }
            />
            <Tab.Screen name="Transaction" component={Transaction}
                        options={
                            {
                                tabBarIcon:({focused})=>{
                                    const image = focused
                                        ? require('../../assets/image/tabBarIcons/transactionSelect.png')
                                        : require('../../assets/image/tabBarIcons/transaction.png')
                                    return(
                                        <Image source={image}/>
                                    )
                                }
                            }
                        }
            />
            <Tab.Screen name="Home"
                        component={Home}
                        options={
                            {
                                tabBarIcon:({focused})=>{
                                    const image = focused
                                        ? require('../../assets/image/tabBarIcons/homeSelect.png')
                                        : require('../../assets/image/tabBarIcons/home.png')
                                    return(
                                        <Image source={image}/>
                                    )
                                }
                            }
                        }
            />

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
    tabBarIcon:{
        width:25,
        height:25,
    }
})
export default Main;