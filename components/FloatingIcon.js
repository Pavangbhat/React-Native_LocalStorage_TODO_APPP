import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const FloatingIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#d8345f',
          position: 'absolute',
          bottom: 10,
          right: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddTodoScreen');
        }}>
        <Icon
          name="plus"
          type="FontAwesome5"
          style={{
            color: '#FFF',
            fontSize: 23,
            fontFamily: 'IndieFlower-Regular',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingIcon;
