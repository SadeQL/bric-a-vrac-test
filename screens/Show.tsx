import { StyleSheet, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { useRoute } from "@react-navigation/native";

export default function Show({ route, navigation }: { route: any, navigation:any }) {
  const path = useRoute();
  console.log(path.name);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.params.paramKey}</Text>
      <Button title='Go back' onPress={()=>navigation.navigate('Update')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
