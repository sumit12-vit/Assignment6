import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";


export default function SecondScreen({navigation}) {
    return (
        <View>
            <Text style={styles.text}>Parents Details</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("TabNav")} 
            style={{backgroundColor:'green', padding:'4%'}}>
                <Text style={styles.touchButton}> Next step</Text>
            </TouchableOpacity>
            
        </View>
    );

}
const styles = StyleSheet.create({
    text: {
      marginTop: 10,
      fontSize: 26,
      textAlign:'center',
      color: 'red',
    },
  
    touchButton : {
      marginTop: 10,
      fontSize: 26,
      textAlign:'right',
      color: 'white',
    },
  
    opacity :{
      backgroundColor: "purple", 
      padding: "7%",
      marginTop: 50
    }
  });