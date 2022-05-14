import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function FirstScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Details Form</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Page_2")}
        style={styles.opacity}
      >
        <Text style={styles.touchButton}> Next step</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 28,
    textAlign:'center',
    color: '#0C00BA',
  },

  touchButton : {
    marginTop: 0,
    fontSize: 28,
    textAlign:'right',
    color: 'black',
  },

  opacity :{
    backgroundColor: "blue", 
    padding: "4%",
    marginTop: 60
  }
});
