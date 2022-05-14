import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";


export default function ThirdScreen({navigation}) {
    return (
        <View>
            <Text style={styles.text}>Educational Details</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Page_2")} 
            style={styles.opacity}>
                <Text style={styles.touchButton}> Previous</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    text: {
      marginTop: 10,
      fontSize: 24,
      textAlign:'center',
      color: '#0C00BA',
    },
  
    touchButton : {
      marginTop: 0,
      fontSize: 24,
      textAlign:'right',
      color: 'yellow',
    },
  
    opacity :{
      backgroundColor: "purple", 
      padding: "5%",
      marginTop: 50
    }
  });