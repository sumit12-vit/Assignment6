import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UseCountContext } from '../../contextAPI/countContextProvider';

export default function TopView() {
  const countContext=UseCountContext();
  return (
    <View style={styles.container}>
      <Text style={{color:"#000"}}>{countContext.count}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{display:'flex',flexDirection:'column', backgroundColor:'yellow'}} onPress={()=>countContext.setCount(countContext.count+1)}>
          <Text>Enter text</Text>
      </TouchableOpacity>

      <Text style={{color:"#000"}}>{countContext.count2}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{display:'flex',flexDirection:'column', backgroundColor:'purple'}} onPress={()=>countContext.setCount2(countContext.count2+1)}>
          <Text>Enter text</Text>
      </TouchableOpacity>

      <Text style={{color:"#000"}}>{countContext.count3}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{display:'flex',flexDirection:'column', backgroundColor:'red'}} onPress={()=>countContext.setCount3(countContext.count3+1)}>
          <Text>Enter text</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'right',
    justifyContent: 'right',
  },
});
