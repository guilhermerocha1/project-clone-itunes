import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

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
      <div data-testid="page-login">
        <label htmlFor="name-input">
          Nome:
          <input
            value={ user }
            name="user"
            onChange={ this.handleChange }
            type="text"
            data-testid="login-name-input"
          />
        </label>
        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={ disabledbutton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
    return (
      this.checkInput(formLogin, loading, redirect)
    );
  }
}

export default Login;
