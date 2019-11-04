import React from "react";
import PropTypes from "prop-types";

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };

    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  _getAudioRef() {
    return this._audioRef;
  }

  render() {
    const {isLoading, isPlaying} = this.state;
    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._handlePlayButtonClick}
        />
        <div className="track__status">
          <audio ref={this._audioRef} />
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const audio = this._getAudioRef().current;

    audio.src = this.props.src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => this.setState({
      isPlaying: true,
    });

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime,
    });

  }

  componentDidUpdate() {
    const audio = this._getAudioRef().current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._getAudioRef().current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  _handlePlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState(({isPlaying}) => ({isPlaying: !isPlaying}));
  }
}

AudioPlayer.defaultProps = {
  isPlaying: false,
  onPlayButtonClick: () => {},
};

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func,
};

export default AudioPlayer;
