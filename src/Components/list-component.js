import React, {Component} from 'react';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
    	people: []
    };

  }

  handleClick() {



  }

  componentWillMount() {

  }

  componentDidMount() {
		this.setState({
			people: [
				{
					firstname: 'Richard',
					lastname: 'Keller',
				},
				{
					firstname: 'Terrillo',
					lastname: 'Walls',
				},
				{
					firstname: 'Patrick',
					lastname: 'Burris',
				},
			]
		})
  }

  render() {

		let people = this.state.people.map((index, person) => (
			<li key={index}>
				<h2>{ person.firsname } { person.lastname }</h2>
			</li>
		));

    return (
      <div>
      	<ul id="list">
    			{people}
      	</ul>
      </div>
    );
  }

}