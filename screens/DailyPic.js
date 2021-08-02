import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class DailyPicScreen extends Component {
  render(){
    return(
      <View 
      style = {{
        flex:1,
      }}>
      <ImageBackground source = {require('../Pictures/space.gif')} style = {styles.backgroundImage}>
       <View style={styles.titleBar}>
      <Text style = {styles.text}> Daily Pictures </Text>
      </View>
      </ImageBackground>
      </View>
    )
  }

}
const styles = StyleSheet.create({

text:{
  color:'white',
  fontSize:40,
  fontWeight:'bold',
  textAlign:'center',
},
backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar:{
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },

})