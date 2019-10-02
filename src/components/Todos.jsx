import React from 'react';
import axios from 'axios';

const todosApi = 'http://localhost:4000/todos';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios.get(todosApi).then(res => {
      this.setState({ todos: res.data });
    });
  }

  markTodo = (id, isComplete) => event => {
    this.setState(currentState => {
      return {
        todos: currentState.todos.map(todo => {
          if (todo.id !== id) return todo;
          return { id: todo.id, name: todo.name, complete: isComplete };
        }),
      };
    });
  }

  render() {
    return (
      <div className='component' style={{ borderColor: 'gold' }}>
        <h5>{this.props.user}&apos;s todos:</h5>
        {
          this.state.todos.map((todo) => (
            <div key={todo.id}>
              {todo.name} {!todo.complete && 'NOT '}completed
              <button onClick={this.markTodo(todo.id, true)}>Mark done</button>
              <button onClick={this.markTodo(todo.id, false)}>Mark undone</button>
            </div>
          ))
        }
      </div>
    );
  }
}
