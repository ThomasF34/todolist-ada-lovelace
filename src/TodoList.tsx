import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
  render(){
    const todos = [{name: 'Faire la formation J7'}, {name: 'Faire la formation J8'}]
    return <div>
      <h2>Je suis le titre de la Todo</h2>
      <ul>
        {todos.map((todo) => <Todo name={todo.name}/>)}
      </ul>
    </div>
  }
}

export default TodoList;