import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

import { Home } from './src/screens/index';
import Login from './src/components/login/login';
import SignUp from './src/components/signUp/signUp';
import Intro from './src/screens/intro';

const theme={
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    border:"transparent"
  }
}

const Stack= createStackNavigator();

const App=()=>{
  return(
   <NavigationContainer theme={theme}>
       <Stack.Navigator screenOptions={{
         headerShown:true
      }}
      initialRouteName={''}
      >
         <Stack.Screen options={{ headerShown:false}} name="Intro" component={Intro} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen  name="Home" component={Home}
         options={{
          headerTransparent: true, headerShown:false}}
          />
         <Stack.Screen name="Creer Un Compte" component={SignUp} />
       </Stack.Navigator>
       
   </NavigationContainer>
  )
}

export default App;