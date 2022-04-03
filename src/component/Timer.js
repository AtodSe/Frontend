import React from 'react'
import { useState, useEffect } from 'react';
import {View,Text} from "react-native";

const Timer = (props:any) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });

    return (
        <View>
            { minutes === 0 && seconds === 0
                ? null
                : <Text style={props.textStyle}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text>
            }
        </View>
    )
}

export default Timer;
