import React from 'react';
import {Icon, ListItem, Left, Right, List} from 'native-base';
import {Context} from './Context';
import {Text} from 'react-native';

const GeneralTodos = () => {
  const {todoList, setTodoList} = React.useContext(Context);

  function removeTodo(item) {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== item.id));
  }

  return (
    <>
      <ListItem
        itemDivider
        style={{
          backgroundColor: '#d8345f',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontStyle: 'italic',
            fontFamily: 'IndieFlower-Regular',
            color: '#FFF',
            fontWeight: 'bold',
          }}>
          General
        </Text>
      </ListItem>

      {todoList.map((item, index) => {
        if (
          item.General == true ||
          (item.General == false && item.Work == false)
        ) {
          return (
            <List key={item.id}>
              <ListItem style={{backgroundColor: `#c1f5ee`, marginLeft: 2}}>
                <Left>
                  <Text style={{fontSize: 23, fontFamily: 'Lobster-Regular'}}>
                    {item.todo}
                  </Text>
                </Left>
                <Right>
                  <Icon
                    name="trash"
                    type="FontAwesome"
                    style={{color: 'red', fontSize: 25}}
                    onPress={() => {
                      removeTodo(item);
                    }}
                  />
                </Right>
              </ListItem>
            </List>
          );
        }
      })}
    </>
  );
};

export default GeneralTodos;
