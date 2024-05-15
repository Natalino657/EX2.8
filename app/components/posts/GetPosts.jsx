import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Post from '../../screens/Post';
import { useState, useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

const GetPosts = () => {
    const [posts, setPosts] = useState([]);

    const getPost = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const post = await result.json();
            setPosts(post)
            return post;
        } catch (error) {
            console.log('ERRO TO FIND A POST', error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {posts.map(
                    item => (
                        <Post key={item.id} title={item.title} body={item.body} />

                    )
                )}
                
            </ScrollView >
        </SafeAreaView>
    )
}

export default GetPosts

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})