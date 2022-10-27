import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../styles/Album.css';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      isLoading: false,
      favorites: [],
    };
  }

  async componentDidMount() {
    this.musicSearch();
    this.favoriteSongs();
  }

  favoriteSongs = async () => {
    this.setState({ isLoading: true });
    const favorites = await getFavoriteSongs();
    this.setState(() => ({ isLoading: false, favorites }));
  }

  musicSearch = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const musics = await getMusics(id);
    musics.forEach((music) => {
      music.checked = false;
    });
    this.setState({ musics });
  };

  saveSong = async ({ target: { name, checked } }) => {
    this.setState({ isLoading: true });
    const { musics, favorites } = this.state;
    const filterTrack = musics.find(({ trackName }) => trackName === name);
    const filterIndex = musics.findIndex((song) => song.trackName === name);
    musics[filterIndex].checked = !musics[filterIndex].checked;

    if (checked) {
      await addSong(filterTrack);
      this.setState((prevState) => (
        { favorites: [...prevState.favorites, filterTrack] }));
    } else {
      await removeSong(filterTrack);
      const tracks = favorites.filter((song) => song.trackId !== filterTrack.trackId);
      this.setState({ favorites: tracks });
    }
    this.setState({ isLoading: false });
  };

  MountMusics = () => {
    const { musics, isLoading, favorites } = this.state;
    const name = musics[0].artistName;
    const collection = musics[0].collectionName;
    const { artworkUrl100 } = musics[0];

    return (
      isLoading
        ? <Loading />
        : (
          <section>
            <img src={ artworkUrl100 } alt="Capa do album"/>
            <p data-testid="artist-name">{name}</p>
            <p data-testid="album-name">{collection}</p>
            {musics.slice(1).map((song) => {
              const { trackName, trackId, previewUrl } = song;
              return (
                <MusicCard
                  key={ trackId }
                  name={ trackName }
                  preview={ previewUrl }
                  id={ trackId }
                  checked={ favorites.some((check) => check.trackId === trackId) }
                  onChange={ this.saveSong }
                  favorites={ favorites }
                />
              );
            })}
          </section>
        ));
  };

  render() {
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {musics.length === 0 ? <Loading /> : this.MountMusics()}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
}.isRequired;
