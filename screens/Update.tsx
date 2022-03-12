import { StyleSheet, TextInput, SafeAreaView, Button } from "react-native";
import React from "react";
import { useState } from "react"; 
import { Text, View } from "../components/Themed";
import { useRoute } from "@react-navigation/native";

export default function Update({ navigation }: { navigation: any }) {
  const path = useRoute();
  console.log(path.name);

  const [input, setInput] = useState("");
  const [textDisplay, setTextDisplay] = useState("");
  const displayInput = () => {
    setTextDisplay(input);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Type anything you want!"
          onChangeText={(value) => setInput(value)}
          multiline={true}
        />
        <Button
          title="Submit"
          onPress={() => {
            displayInput();
            navigation.navigate("Show", { paramKey: input });
          }}
        ></Button>

        <Text style={styles.text}>{textDisplay}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputText:{
    fontSize: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
