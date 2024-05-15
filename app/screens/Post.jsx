import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Post = ({ title, body}) => {  
  const navigation = useNavigation();
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
            <Button
                    title='Ver mais..'
                    onPress={()=>navigation.navigate('PostDetail')}
                />
          </View>
        );  
}

export default Post

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    body: {
        fontSize: 16,
    },
})