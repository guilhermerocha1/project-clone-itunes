import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      bandName: '',
      albumName: '',
      dataAlbum: [],
      albumImg: '',
    };
  }

  componentDidMount() {
    this.fetchMusic();
  }

  fetchMusic = async () => {
    const { match } = this.props;
    const response = await getMusics(match.params.id);
    this.setState({
      dataAlbum: response,
      bandName: response[0].artistName,
      albumName: response[0].collectionName,
      albumImg: response[0].artworkUrl100,
    });
  }

  render() {
    const { dataAlbum, bandName, albumImg, albumName } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          <img src={ albumImg } alt={ albumName } />
          <h1 data-testid="album-name">{ albumName }</h1>
          <h2 data-testid="artist-name">{ bandName }</h2>
        </section>
        <MusicCard musics={ dataAlbum } />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
