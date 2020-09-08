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
      return <div>
          <li style={{textDecoration: "line-through"}}>{this.props.name}</li>
          {buttonChange}
        </div>
    } else {
      return <div>
          <li>{this.props.name}</li>
          {buttonChange}
        </div>
    }
  }
}

export default Todo;