import React from 'react';
import HomeScreen from './components/HomeScreen';
import Provider from './components/Provider';
import AddTodoScreen from './components/AddTodoScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddTodoScreen" component={AddTodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
