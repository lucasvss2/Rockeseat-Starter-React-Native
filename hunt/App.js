import React from 'react';
/* import {Text, View} from 'react-native'; */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import './src/config/StatusBarConfig';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: 'JsHunt',
            headerStyle: {
              backgroundColor: '#DA552F',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
