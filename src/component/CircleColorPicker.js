import React,{useState} from "react";
import {View, StyleSheet, TouchableOpacity,TouchableWithoutFeedback, Dimensions} from "react-native";
import { ColorPicker } from 'react-native-status-color-picker';

const CircleColorPicker = (props) => {
    const [colors,setColors] = useState(["#F44336", "#E91E63", "#9C27B0", "#673AB7",
        "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688",
        "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107",
        "#FF9800", "#FF5722", "#795548"]);
    const [selectedColor,setSelectedColor] = useState('#F44336');
  return(
          <View style={styles.circle} >
              <View style = {[styles.circleIn]}
              >
                  <ColorPicker
                      colors={colors}
                      selectedColor={selectedColor}
                      onSelect={(color)=>{setSelectedColor(color)}}
                  />
              </View>
          </View>

  );
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        borderColor:'#5724AB',
        borderWidth:4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleIn:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.21,
        height: Dimensions.get('window').width * 0.21,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CircleColorPicker;
