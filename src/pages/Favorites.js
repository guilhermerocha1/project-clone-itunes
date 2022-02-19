import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      musics: [],
    };
  }

  componentDidMount() {
    this.favoriteSongs();
  }

  favoriteSongs= async () => {
    const musics = await getFavoriteSongs();
    this.setState({ isLoading: false, musics });
  }

  removeFavorite = async ({ target: { id } }) => {
    this.setState({ isLoading: true });
    const { musics } = this.state;
    const track = musics.find(({ trackId }) => trackId === Number(id));
    await removeSong(track);
    const atMusics = musics.filter((music) => music.trackId !== Number(id));
    this.setState({ isLoading: false, musics: atMusics });
  }

  render() {
    const { isLoading, musics } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { isLoading ? <Loading /> : (
          musics.map((song) => {
            const { trackName, trackId, previewUrl, checked, artworkUrl100 } = song;
            return (
              <MusicCard
                key={ trackId }
                name={ trackName }
                previewUrl={ previewUrl }
                id={ trackId }
                checked={ checked }
                onChange={ this.removeFavorite }
                thumb={ artworkUrl100 }
              />
            );
          })
        )}
      </div>
    );
  }
}
