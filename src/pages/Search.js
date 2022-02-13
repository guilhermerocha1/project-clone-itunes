import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Form from '../components/Form';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const MIN_LENGTH_SEARCH = 2;

class Search extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      input: '',
      search: '',
      albumName: '',
    };
  }

  handleSearch= ({ target }) => {
    const { value } = target;
    this.setState({ input: value });
  }

  FilterAlbum = async (event) => {
    event.preventDefault();
    const { input } = this.state;
    this.setState({ input: '', isLoading: true });
    const albumName = await searchAlbumsAPI(input);
    this.setState({ albumName, isLoading: false, search: input });
  }

  Form = () => {
    const { input } = this.state;
    const activateButton = input.length >= MIN_LENGTH_SEARCH;

    return (
      <Form
        tidInput="search-artist-input"
        tidBtn="search-artist-button"
        id="input-search"
        value={ input }
        onChange={ this.handleSearch }
        txtBtn="Pesquisar"
        disabled={ activateButton }
        onClick={ this.FilterAlbum }
        className="form"
        placeholder="Nome do Artista"
      />
    );
  }

  AlbumArtist = () => {
    const { albumName, search } = this.state;
    const text = `Resultado de álbuns de: ${search}`;
    return (
      <section className="album">
        <p>{ text }</p>
        {albumName.map((album) => (
          <Link
            data-testid={ `link-to-album-${album.collectionId}` }
            to={ `album/${album.collectionId}` }
            key={ album.collectionId }
          >
            <section className="box-album">
              <img src={ album.artworkUrl100 } alt="Imagem do álbum" />
              <h1>{album.collectionName}</h1>
              <h2>{album.artistName}</h2>
            </section>
          </Link>
        ))}
      </section>
    );
  }

  render() {
    const { albumName, search, isLoading } = this.state;
    const Empty = search.length > 0 && albumName.length === 0;
    return (
      <div data-testid="page-search">
        <Header />

        {isLoading ? <Loading /> : this.Form()}

        {albumName.length > 0 && this.AlbumArtist()}

        {Empty && <span>Nenhum álbum foi encontrado</span>}
      </div>
    );
  }
}

export default Search;
