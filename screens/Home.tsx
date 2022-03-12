import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';



export default function Home(){
  const [page, setPage] = useState('Home')
  useEffect(()=>{ 
    
      console.log(page)
    
  })
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
    alignSelf: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom:0,
  },
});
