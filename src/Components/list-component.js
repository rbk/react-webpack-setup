var Db = require('../db/index.js');
import React, {Component} from 'react';
export default class List extends Component {

  constructor(props) {
    super(props);

    Db.getAll();

    this.state = {
    	people: []
    };

  }

  componentDidMount() {

		this.setState({
			
		})
  }

  render() {
  	let people = ''
		// let people = this.state.people.map((index, todos) => (
		// 	<li key={index}>
		// 		<div>todos.todo</div>
		// 	</li>
		// ));

    return (
      <div>
      	<ul id="list">
    			{people}
      	</ul>
      </div>
    );
  }

}