var Db = require('../db/index.js');
import React, {Component} from 'react';
import List from './list-component.js';

export default class Form extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  addTodo(text) {
    // console.log(Db)
    // return;
    let todoText = document.getElementById('todo').value;
    Db.insert(todoText);
  }

  render() {

    // this.props.todo = ;

    return (
      <div>
      	<List />
      	<form>
      		<div><input type="text" id="todo" /></div>
      		<div onClick={ e => this.addTodo() }>Add</div>
      	</form>
      </div>
    );
  }

}