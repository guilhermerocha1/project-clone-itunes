import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import { AiOutlineStar } from 'react-icons/ai';
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
        <nav className='bar-nav'>
          <h1 id='title1'>trybe</h1><h1 id='title2'>tunes</h1>
          <Link to="/search" data-testid="link-to-search" id='pesquisar'>Pesquisar</Link>
          <Link to="/favorites" data-testid="link-to-favorites" id='favoritos'>Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile" id='perfil'>Perfil</Link>
          <h2 data-testid="header-user-name">{userName}</h2>
        </nav>
      )
    );
  }
}

export default Header;
