import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Context} from './Context';
import AsyncStorage from '@react-native-community/async-storage';
import {Content} from 'native-base';
import Headers from './Headers';
import WorkTodos from './WorkTodos';
import GeneralTodos from './GeneralTodos';
import FloatingIcon from './FloatingIcon';

const HomeScreen = () => {
  const {todoList, setTodoList} = React.useContext(Context);
  const [isActive, setIsActive] = React.useState(true);

  React.useEffect(() => {
    AsyncStorage.getItem('TODODATA').then((value) => {
      if (value != null) {
        setIsActive(true);
        value = JSON.parse(value);
        setTodoList(value);
        setIsActive(false);
      }
    });
  }, []);

  React.useEffect(() => {
    try {
      setIsActive(true);
      AsyncStorage.setItem('TODODATA', JSON.stringify(todoList));

      setIsActive(false);
    } catch (error) {
      console.log('error', error);
    }
  }, [todoList]);

  if (isActive) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Headers title="My TODOs" />
      <Content>
        {/* Work TODOs */}
        <WorkTodos />
        {/* General TODOs */}
        <GeneralTodos />
      </Content>
      <FloatingIcon />
    </View>
  );
};

export default HomeScreen;
