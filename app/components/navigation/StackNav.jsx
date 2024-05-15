import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PostDetail from '../posts/PostDetail';
import TabNav from './TabNav';
import GetPosts from '../posts/GetPosts';

const Stack = createStackNavigator();


const StackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
  }}
    >

      <Stack.Screen
        name='GetPosts'
        component={GetPosts}
      />

      <Stack.Screen
        name='PostDetail'
        component={PostDetail}
      />

    </Stack.Navigator>
  )
}

const PostDetail = () => {
  return <TabNav />;
}


export default StackNav
