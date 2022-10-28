import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../styles/Login.css';

const MIN_LENGTH = 3;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      disabledbutton: true,
      loading: false,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      user: target.value,
      disabledbutton: MIN_LENGTH > target.value.length,
    });
  };

  handleClick = async () => {
    const { user } = this.state;
    this.setState({ loading: true });
    await createUser({ name: user });
    this.setState({ redirect: true });
  };

  checkInput = (formLogin, loading, redirect) => {
    if (loading) {
      if (redirect) {
        return <Redirect to="/search" />;
      }
      return (<Loading />);
    }
    return (formLogin);
  };

  render() {
    const { disabledbutton, user, redirect, loading } = this.state;
    const formLogin = (
      <div data-testid="page-login" className='main-login'>
        <h1 id='trybe'>trybe</h1><h1 id='tunes'>tunes</h1>
        <div className='login'>
          <input
            value={user}
            name="user"
            onChange={this.handleChange}
            type="text"
            placeholder='qual é o seu nome ?'
            data-testid="login-name-input"
            className='input-name'
          />
          <button
            className='button-submit'
            type="submit"
            data-testid="login-submit-button"
            disabled={disabledbutton}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
          >
            Entrar
          </button>
        </div>
      </div>
    );
    return (
      this.checkInput(formLogin, loading, redirect)
    );
  }
}

export default Login;
