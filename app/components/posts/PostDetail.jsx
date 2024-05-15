import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostDetail = () => {
  return (
    <View>
      <Text style={styles.title}>Post Details </Text>
      <Button 
      title='Go Back'
      onPress={()=>navigation.navigate('GetPosts')}
      />
    </View>
  )
}

export default PostDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title:{
    fontSize:22,
    fontWeight:'bold'
  }
})