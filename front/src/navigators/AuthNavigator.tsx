import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/auth/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
