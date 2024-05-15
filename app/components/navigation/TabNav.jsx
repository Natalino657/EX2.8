import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../../screens/Profile';
import { MaterialCommunityIcons,  Ionicons} from '@expo/vector-icons';
import Contacts from '../../screens/Contacts';
import Home from '../../screens/Home';
import StackNav from './StackNav';


const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'home') {
          iconName = focused
            ? 'home-sharp'
            : 'home-outline';
        }else if( route.name === 'GetPosts'){
          iconName = focused
          ? 'list'
          : 'list-outline';
        } else if(route.name=='Contacts'){
          iconName = focused
          ? 'send'
          : 'send-outline'
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>

      <Tab.Screen
        name="home"
        component={Home}
      />

       <Tab.Screen
        name="GetPosts"
        component={StackNav}
      />

      <Tab.Screen
        options={({route})=>({
          tabBarIcon:({focused, color, size}) => {
            let iconName2;
            if( route.name === 'Profile'){
              iconName = focused
              ? 'account'
              : 'account-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
          }
         
        })}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
      /> 



    </Tab.Navigator>

  )
}

export default TabNav