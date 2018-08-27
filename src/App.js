import React, { Component } from 'react';
import './App.css';
import InputText from './containers/InputText';
import TodoList from './containers/TodoList';
import FilterThing from './containers/Filterthing'

class App extends Component {

  render() {
    return (
      <div>
        <InputText />
        <TodoList />
        <FilterThing />
      </div>
    );
  }
}

export default App;
