import React, { Component } from 'react';
import GenerateQuotes from './component/GenerateQuotes';
import DisplayQuotes from './component/DisplayQuotes';

const sampleQuotes = {
	quote: 'Shoplifting is a victimless crime, like punching someone in the dark.',
	character: 'Nelson Muntz',
	image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: sampleQuotes
		};
	}
	getQuotes() {
		
		fetch('https://thesimpsonsquoteapi.glitch.me/quotes').then((response) => response.json()).then((data) => {
					this.setState({
				quotes: data[0]
			});
		});
	}
	render() {
		return (
			<div className="App">
				<GenerateQuotes selectQuotes={() => this.getQuotes()} />
				<DisplayQuotes quotes={this.state.quotes} />
			</div>
		);
	}
}

export default App;