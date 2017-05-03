import React     from 'react';
import ReactDOM  from 'react-dom';
import Search    from './components/search.js'
import Details 	 from './components/details.js'
import Player    from './components/player.js'
import Progress  from './components/progress.js'
import Footer	 from './components/footer.js'

class App extends React.Component {
	render() {
		return (
			<div>
				<Search/>
				<Details title={'Test Track Title'}/>
				<Player/>
				<Progress
					position={'0.3'}
					elapsed={'00:00'}
					total={'0:40'}/>
				<Footer/>
			</div>
		);
	}
};

ReactDOM.render(<App/>, document.getElementById('app'));