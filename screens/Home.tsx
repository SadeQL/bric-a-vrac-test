import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';



export default function DisplayLogoName(){
  return(
    <View style={styles.container}>

      <Image style = {styles.logo} source = {require('../assets/images/logo.png')} />

      <Text style={styles.name}>Quentin LEE</Text> 

     
    </View>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '60%',
    height: '45%',
    alignSelf: 'center'
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-end'
  },
});
