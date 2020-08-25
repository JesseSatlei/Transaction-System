import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="login-form-wrapper">
        <div className="login-title">
          <h2>Login</h2>
          <Link to="/register">
            Inscreva-se
          </Link>
        </div>
        <form action="">
        <div className="">
          <input id="email" type="email" className="form-control" placeholder="E-mail..." name="email" required />
          <input id="password" type="password" className="form-control" placeholder="Senha..." name="password" required />
        </div>
        <div className="">
          <button type="submit" className="">
            <Link to="/transaction">
              Login
            </Link>
          </button>
          {/* <a className="" href="{{ route('password.request') }}">
            Esqueceu sua Senha?
          </a> */}
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;