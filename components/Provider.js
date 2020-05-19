import React from 'react';
import { Context } from './Context';


const Provider = (props) => {
    const [todoList,setTodoList]=React.useState([])
    return ( 
        <Context.Provider value={{
          todoList,
          setTodoList
        }}>
            {props.children}
        </Context.Provider>

     );
}
 
export default Provider;