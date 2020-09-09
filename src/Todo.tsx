import React from 'react';

interface TodoProps {
  name: string;
  done: boolean;
  setTodoDone: () => void;
}

class Todo extends React.Component<TodoProps> {
  render(){
    const buttonChange = <button onClick={(event) => this.props.setTodoDone()}>Fait !</button>
    if(this.props.done){
      return <li>
          <p style={{textDecoration: "line-through"}}>{this.props.name}</p>
          {buttonChange}
        </li>
    } else {
      return <li>
          <p>{this.props.name}</p>
          {buttonChange}
        </li>
    }
  }
}

export default Todo;