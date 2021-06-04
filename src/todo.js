import React from 'react';
import './style.css'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>ADD TODO LIST:</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange}
              value={this.state.text}
            />
            <br></br>
            <br></br>
            <button>
              Add LIST 
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(event) {
      this.setState({ text: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if (this.state.text.length === 0) {
        alert('input field is empty');
      }
      const newItem = {
        text: this.state.text,
        
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
        
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
          
          
        </ul>
      );
    }
  }
  
 export default TodoApp;