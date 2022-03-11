import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';


export default function Show({route}:{route: any}) {
 
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{route.params.paramKey}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

});
