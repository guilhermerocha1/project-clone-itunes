import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const MIN_LENGTH = 2;

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      album: '',
      input: '',
      disablebutton: true,
      arrAlbums: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  isDisablevalueButton = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value,
      disablebutton: MIN_LENGTH > value.length,
    });
  }

  fetchAlbums = async () => {
    const { input } = this.state;
    this.setState({ input: '', isLoading: true });
    const response = await searchAlbumsAPI(input);
    this.setState({
      arrAlbums: [...response],
      album: input,
      isLoading: false,
    });
  }

  form = () => {
    const { disablebutton, input } = this.state;
    return (
      <form>
        <input
          name="album"
          onChange={ this.isDisablevalueButton }
          data-testid="search-artist-input"
          value={ input }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ disablebutton }
          onClick={ this.fetchAlbums }
        >
          Pesquisar
        </button>
      </form>
    );
  }

  listAlbum = () => {
    const { album, arrAlbums } = this.state;
    const text = `Resultado de álbuns de: ${album}`;
    return (
      <section className="album">
        <p>{text}</p>
        {arrAlbums.map((albums) => (
          <Link
            data-testid={ `link-to-album-${albums.collectionId}` }
            to={ `album/${albums.collectionId}` }
            key={ albums.collectionId }
          >
            <section>
              <img src={ albums.artworkUrl100 } alt={ albums.artistName } />
              <h1>{albums.collectionName}</h1>
              <h2>{albums.artistName}</h2>
            </section>
          </Link>
        ))}
      </section>
    );
  }

  render() {
    const { arrAlbums, isLoading, album } = this.state;
    const result = arrAlbums.length === 0 && album.length > 0;
    return (
      <div data-testid="page-search">
        <Header />
        {isLoading ? <Loading /> : this.form()}
        {arrAlbums.length > 0 && this.listAlbum()}
        {result && <span>Nenhum álbum foi encontrado</span>}
      </div>
    );
  }
}

export default Search;
