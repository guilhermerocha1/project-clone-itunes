import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      user: {},
    };
  }

  componentDidMount= async () => {
    this.getUserAPI();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  getUserAPI = async () => {
    const user = await getUser();
    this.setState({ isLoading: false, user });
  }

  render() {
    const { isLoading, user: { name, email, image, description } } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        { isLoading ? <Loading /> : (
          <section>
            <div>
              <img data-testid="profile-image" src={ image } alt={ name } />
            </div>
            <Link to="/profile/edit">Editar perfil</Link>
            <h4>Nome</h4>
            <p>{name}</p>
            <h4>Email</h4>
            <p>{email}</p>
            <h4>Descrição</h4>
            <p>{description}</p>
          </section>
        )}
      </div>
    );
  }
}
