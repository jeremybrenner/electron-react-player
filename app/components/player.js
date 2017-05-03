import React from 'react';
import ClassNames from 'classnames';

class Player extends React.Component {
	render() {

		const playPauseClass = ClassNames({
			'fa fa-play' : this.props.playStatus == 'PLAYING' ? false : true,
			'fa fa-pause' : this.props.playStatus == 'PLAYING' ? true : false
		});

		return (
			<div>
				<div className="player">
					<div className="player-backward">
						<button onClick={ this.props.backward } className="fa fa-backward"></button>
					</div>
					<div className="player-main">
						<button onClick={ this.props.togglePlay }><i className={playPauseClass}></i></button>
						<button onClick={ this.props.stop }><i className="fa fa-stop"></i></button>
						<button onClick={ this.props.random }><i className="fa fa-random"></i></button>
					</div>
					<div className="player-forward">
						<button onClick={ this.props.forward } className="fa fa-forward"></button>
					</div>
				</div>
			</div>
		);
	}
}

export default Player