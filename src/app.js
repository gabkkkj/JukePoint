import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, createNativeStackNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from "./views/HomeScreen"
import CreateScreen from "./views/CreateScreen"
import LoginScreen from './views/CreateScreen';
import PerfilScreen from './views/PerfilScreen'
import ProcuraScreen from './views/ProcuraScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Create'>
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
        />
        <Tab.Screen name="Create" component={CreateScreen} 
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="account-plus" color={color} size={size} />
          )
        }}
        />
        <Tab.Screen name="Login" component={LoginScreen}    
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="account-arrow-right" color={color} size={size} />
          )
        }}
        />
        <Tab.Screen name="Procura" component={ProcuraScreen} 
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="home-search" color={color} size={size} />
          )
        }}
        />
        <Tab.Screen name="Perfil" component={PerfilScreen} 
        options={{
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="account-tie" color={color} size={size} />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;