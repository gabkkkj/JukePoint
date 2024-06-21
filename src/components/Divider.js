import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 
import { Divider } from 'react-native-paper'; 
  
const CreateDivider = () => { 
  return ( 
        <View style={styles.parent}> 
            <Divider /> 
        </View>      
      )
}; 
  
export default CreateDivider; 
  
const styles = StyleSheet.create({ 
  parent: { 
    margin: 15, 
  }, 
  text: { 
    fontSize: 20, 
  }, 
});