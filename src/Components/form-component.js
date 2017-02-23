import React, {Component} from 'react';
import List from './list-component.js';

export default class Form extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {

    return (
      <div>
      	<List />
      	<form>
      		<div><label>Add an item:</label></div>
      		<div><input type="text" name="todo" /></div>
      		<div><input type="submit" /></div>
      	</form>
      </div>
    );
  }

}