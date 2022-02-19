import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { name, preview, id, checked, onChange, thumb } = this.props;
    return (
      <div className="musicCard">
        {thumb && <img src={ thumb } alt="Album da música" />}
        <h1>{name}</h1>
        <audio data-testid="audio-component" src={ preview } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>

        <label htmlFor={ id }>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${id}` }
            id={ id }
            name={ name }
            checked={ checked }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  name: PropTypes.string,
  preview: PropTypes.string,
  id: PropTypes.string,
  saveTrack: PropTypes.func,
}.isRequired;
