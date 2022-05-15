import React, {useEffect, useState} from "react";
import {View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Image} from "react-native";
import ColorPicker from "./ColorPicker";
import IconPicker from "./IconPicker";
import icon from "../../assets/image/remainderIcon";

const CircleProfilePickerRemainder = (props) => {

    const [icons,setIcons] = useState(icon);
    const [selectedIcon,setSelectedIcon] = useState(props.icon);
    const [visible,setVisible] = useState(false)
    useEffect(()=>{
        props.setIcon(selectedIcon)
    },[selectedIcon])
  return(
          <View style={[styles.circle,{borderColor:selectedIcon===''?'#5724AB':selectedIcon.border}]} >
              <View style = {[styles.circleIn,{ backgroundColor:selectedIcon===''?'#E9DBFF':'#fff'}]}>
                  <TouchableOpacity
                      style={styles.circleIn}
                      onPress={()=> {
                          setVisible(!visible)
                      }
                      }
                  >
                    <IconPicker setVisible={setVisible} visible={visible} icons={icons} setSelectedIcon={setSelectedIcon}/>
                      {
                          selectedIcon!==''?
                              <Image source={selectedIcon.src} style={{ width: '60%', height: '60%',resizeMode: 'stretch',marginBottom:20}}/>
                          :
                              null
                      }
                  </TouchableOpacity>
              </View>

          </View>

  );
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        borderWidth:4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleIn:{
        borderRadius: 82,
        width:82,
        height:82,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CircleProfilePickerRemainder;
