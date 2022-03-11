import { StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';
import React from 'react';
import { Text, View } from '../components/Themed';

export default function Update() {
    const [input, setInput] = React.useState("");
    const displayInput = ()=>{
      alert(input)
    }
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TextInput 
      placeholder= 'Type anything you want' 
      onChangeText={nextInput => setInput(nextInput)} 
      defaultValue={input} 
      multiline={true}
      numberOfLines={15}/>
    
      <Button title="Submit" onPress={()=> displayInput()}></Button>

     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
