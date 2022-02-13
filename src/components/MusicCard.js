import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musics } = this.props;
    return (
      <div>
        {musics.filter((songs) => songs.kind === 'song').map((musicsList) => (
          <section key={ musicsList.trackTimeMillis }>
            <p>{musicsList.trackName}</p>
            <audio data-testid="audio-component" src={ musicsList.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
          </section>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.shape().isRequired,
};

export default MusicCard;
