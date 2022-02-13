import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
          <nav>
            <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </nav>
        </header>
      )
    );
  }
}

export default Header;
