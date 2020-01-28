import React from 'react';
import './App.css';

import About from './components/About';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Anis Sarker',
			about: 'I am a Research Assistant at AGenCy Lab @IUB. I received my Bachelor of Science degree in Computer Science at Independent University, Bangladesh(IUB)',

		}
	}

	render() {
		return (
			<div className="App">
				<About name={this.state.name} about={this.state.about} />
			</div>
		);
	}
}

export default App;
