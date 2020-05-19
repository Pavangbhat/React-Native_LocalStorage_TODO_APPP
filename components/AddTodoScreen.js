import React from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Icon,
  Header,
  Left,
  Body,
  Title,
  ListItem,
  CheckBox,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import faker from 'faker';
import {Context} from './Context';

const AddTodoScreen = () => {
  const navigation = useNavigation();
  const [todoInput, setTodoInput] = React.useState('');
  const {todoList, setTodoList} = React.useContext(Context);
  const [generalTodo, setGeneralTodo] = React.useState(false);
  const [workTodo, setworkTodo] = React.useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ecdff5'}}>
      <Header
        style={{backgroundColor: '#63b7af'}}
        androidStatusBarColor="#63b7af">
        <Left>
          <Icon
            name="arrow-left"
            type="FontAwesome5"
            style={{color: '#FFF', fontSize: 20}}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Left>
        <Body>
          <Title style={{fontSize: 25, fontFamily: 'Kalam-Bold'}}>
            AddTODO
          </Title>
        </Body>
      </Header>

      <View style={{marginTop: 10}}>
        <Text
          style={{fontSize: 40, fontFamily: 'Lobster-Regular', paddingLeft: 3}}>
          Enter your TODO
        </Text>
      </View>
      <View
        style={{
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderWidth: 1,
          borderRadius: 10,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          autoFocus={true}
          keyboardType="ascii-capable"
          style={{flexWrap: 'wrap', fontSize: 20}}
          multiline={true}
          value={todoInput}
          onChangeText={(text) => {
            setTodoInput(text);
          }}
        />
      </View>

      <View>
        <ListItem>
          <CheckBox
            checked={generalTodo}
            color="blue"
            onPress={() => {
              if (workTodo == true) {
                setworkTodo(false);
              }
              setGeneralTodo(!generalTodo);
            }}
          />
          <Body>
            <TouchableOpacity
              onPress={() => {
                if (workTodo == true) {
                  setworkTodo(false);
                }
                setGeneralTodo(!generalTodo);
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Kalam-Bold',
                  color: 'blue',
                  paddingLeft: 4,
                }}>
                General
              </Text>
            </TouchableOpacity>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox
            checked={workTodo}
            color="red"
            onPress={() => {
              if (generalTodo == true) {
                setGeneralTodo(false);
              }
              setworkTodo(!workTodo);
            }}
          />
          <Body>
            <TouchableOpacity
              onPress={() => {
                if (generalTodo == true) {
                  setGeneralTodo(false);
                }
                setworkTodo(!workTodo);
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Kalam-Bold',
                  color: 'red',
                  paddingLeft: 4,
                }}>
                Work
              </Text>
            </TouchableOpacity>
          </Body>
        </ListItem>
      </View>
      <View
        style={{marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          disabled={isButtonDisabled}
          style={{backgroundColor: '#d8345f'}}
          onPress={() => {
            if (todoInput === '') {
              Alert.alert('Please enter a TODO');
            } else {
              setIsButtonDisabled(true);
              let obj = {
                id: faker.random.uuid(),
                todo: todoInput,
                General: generalTodo,
                Work: workTodo,
              };
              setTodoList([...todoList, obj]);
              navigation.goBack();
            }
          }}>
          <Text
            style={{padding: 30, fontSize: 20, color: '#FFF', borderRadius: 5}}>
            Submit
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default AddTodoScreen;
