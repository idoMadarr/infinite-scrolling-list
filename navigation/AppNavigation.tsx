import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';

const AppNavigator = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator screenOptions={{headerShown: false}}>
        <AppNavigator.Screen name={'main'} component={MainScreen} />
        {/* ... More Screen ... */}
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
