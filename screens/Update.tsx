import { StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';
import React from 'react';
import { Text, View } from '../components/Themed';


export default function Update({navigation}: {navigation: any}) {
 
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
      <Button title="Submit" onPress={()=> {displayInput(); navigation.navigate('Show', {paramKey: input})}}></Button>

      <Text style= {styles.text}>{textDisplay}</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
