import { StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';
import React from 'react';
import { Text, View } from '../components/Themed';

export default function Update() {
    const [input, setInput] = React.useState("");
    const [textDisplay, setTextDisplay] = React.useState("");
    const displayInput = () => {
      setTextDisplay(input)
    }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TextInput 
      placeholder= 'Type anything you want!' 
      onChangeText={value => setInput(value)} 
      defaultValue={input} 
      multiline={true}
      />
      <Button title="Submit" onPress={()=> displayInput()}></Button>
      {/* <Text>{input}</Text> */}
      <Text>{textDisplay}</Text>
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
