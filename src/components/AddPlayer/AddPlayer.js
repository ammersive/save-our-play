import { Component } from "react";

class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: { id: null, name: "", play_count: 1 },
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let player = { id: null, name: e.currentTarget.value, play_count: 1}; 
		this.setState({ player: player });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSave({ ...this.state }); // copy the local state	to pass up			
		this.setState({ player: { id: null, name: "", play_count: 1} }); //reset the state
	}

	render() {
		return (
			<div className="draw-add-players">
				<h3>Add new</h3>
				<p>Add new player</p>
				<form onSubmit={ this.handleSubmit } >
					<input onChange={ this.handleChange } value={ this.state.player.name }/>
					<button className="add-button">Add</button>
				</form>
			</div>
		);
	}
}

export default AddPlayer;