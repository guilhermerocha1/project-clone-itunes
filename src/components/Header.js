import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../styles/Search.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    this.userName();
  }

  userName = async () => {
    const user = await getUser();
    this.setState({ userName: user.name });
  }

  render() {
    const { userName } = this.state;
    return (
      !userName ? <Loading /> : (
        <header data-testid="header-component">
          <h2 data-testid="header-user-name">{userName}</h2>
          <nav className='bar-nav'>
            <h1 id='trybe'>trybe</h1><h1 id='tunes'>tunes</h1>
            <Link to="/search" data-testid="link-to-search" id='pesquisar'>Pesquisar</Link>
            <Link to="/favorites" data-testid="link-to-favorites" id='favoritos'>Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile" id='perfil'>Perfil</Link>
          </nav>
        </header>
      )
    );
  }
}

export default Header;
