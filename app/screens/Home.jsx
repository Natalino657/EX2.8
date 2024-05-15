import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.ipb} source={require('../assets/IPB.png')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    ipb:{
      width:'100%',
      height: 180,
      resizeMode:'contain',
    },
})