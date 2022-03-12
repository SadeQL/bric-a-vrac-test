import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { useRoute } from "@react-navigation/native";

export default function Home() {
  const path = useRoute();
  console.log(path.name);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.name}>Quentin LEE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "60%",
    height: "45%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
  },
});
