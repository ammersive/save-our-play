import { Component } from "react";

class Save extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: props.players,
		};
		this.handleSave = this.handleSave.bind(this);
	}

	handleSave() {
		let data = [];
		// populate a list with data on which players were just selected to pass to the API action creator updatePlayCounts
    this.state.players.forEach(element => data.push(element));
		this.props.handleSave( data ); 		
		this.setState({ players: [] }); 
	}

	render() {
		return (
			<button onClick={ this.handleSave }> 
        Save
      </button>
		);
	}
}

export default Save;