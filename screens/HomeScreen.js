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

export default class HomeScreen extends Component {
  render(){
    return(
      <View 
      style = {{
        flex:1,
      }}>
 <ImageBackground source = {require('../Pictures/space.gif')} style = {styles.backgroundImage}>
  <View style={styles.titleBar}>
      <Text style = {styles.text}> Stellar App </Text>
      </View>
       <TouchableOpacity style={styles.routeCard} onPress={() =>
        this.props.navigation.navigate("DailyPic")
        }>
 <Text style={styles.routeText}>Daily Pictures</Text>
 <Image source = {require('../Pictures/daily_pictures.png')} style = {styles.iconImage}/>
        </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard1} onPress={() =>
        this.props.navigation.navigate("SpaceCrafts")
        }>
 <Text style={styles.routeText1}>Space Crafts</Text>
 <Image source = {require('../Pictures/space_crafts.png')} style = {styles.iconImage}/>
        </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard2} onPress={() =>
        this.props.navigation.navigate("StarMap")
        }>
 <Text style={styles.routeText2}>Star Map</Text>
 <Image source = {require('../Pictures/star_map.png')} style = {styles.iconImage}/>
        </TouchableOpacity>





      </ImageBackground>
      </View>
    )
  }

}

const styles = StyleSheet.create({

text:{
  color:'white',
  fontSize:40,
  fontWeight:'bold'
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
      routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'red'
    },
      routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 40,
        paddingLeft: 15
    },
     iconImage: {
        position: "absolute",
        height: 250,
        width: 80,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    routeText1: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 30,
        paddingLeft: 15,
        paddingRight:30
    },
    routeCard1: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'blue'
    },
    routeText2: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 30,
        paddingLeft: 15,
        paddingRight:80
    },
    routeCard2: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'green'
    },
})