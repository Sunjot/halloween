import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';

class List extends React.Component {

	constructor() {
		super();
		this.state = {
			pass: '',
			list: []
		}
	}

	updateField = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submit = async () => {

		var res = await fetch('/api/topsecret', {
			method: 'POST',
			body: JSON.stringify({pass: this.state.pass}),
			headers: {"Content-Type": "application/json"}
		});

		this.setState({
			list: await res.json()
		}, () => {
			console.log(this.state.list);
		});
	}

  render() {
		return (
			<div id="app-wrap">
				<TextInput name="pass" value={this.state.pass} updateField={this.updateField}/>
				<div id="button" onClick={() => this.submit()}>Submit</div>
				{this.state.list.length > 0 && 
					<div id="list">
						{this.state.list.map((x, i) => {
							return(
								<div className="row">{x.first} {x.last} // Guest: {x.plusone} // Notes: {x.notes}</div>
							)
						})}
					</div>
				}
			</div>
		)
  }
}

export default List;
