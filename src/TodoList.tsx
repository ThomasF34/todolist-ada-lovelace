import React from 'react';
import Todo from './Todo';

interface TodoListState {
  todos: ITodo[]
}

interface ITodo{
  name: string;
  done: boolean;
}

class TodoList extends React.Component<{}, TodoListState>{
  constructor(props: {}){
    super(props);
    this.state = {
      todos: [
        {name: 'Faire la formation J7', done: false},
        {name: 'Faire la formation J8', done: false}
      ]
    }
  }
  render(){
    return <div>
      <h2>Je suis le titre de la Todo</h2>
      <ul>
        {this.state.todos.map((todo) => {
        return <Todo name={todo.name} done={todo.done} setTodoDone={() => {
          this.setState({
            todos: [
              ...this.state.todos.filter((todoInState) => todoInState !== todo),
              {name: todo.name, done: true}
            ]
          });
        }}/>
      })}
      </ul>
    </div>
  }
}

// const state1 = {a: 'Coucou', b: 'Salut'}

// this.setState({
//   b: state1.b,
//   a: 'Coucou2'
// });

// const state2 = {
//   ...state1,
//   a: 'Coucou2'
// }

// const tableau = ['a', 'b']
// tableau.push('c')

// const b = [...tableau, 'c']
// // const state2 = {a: 'Coucou2', b: 'Salut'}
export default TodoList;