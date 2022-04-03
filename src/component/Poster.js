import React from "react";
import {View ,StyleSheet} from "react-native";

const Poster = (props) => {
  return(
      <View style={[styles.poster,props.style]}>

      </View>
  )
}
const styles=StyleSheet.create({
    poster:{
        flex:1,
        height:100,
        width:225,
        borderRadius:20,
        marginHorizontal:12,
        backgroundColor:'#333'
    }
});
export default Poster;
