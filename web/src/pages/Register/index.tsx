import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="register">
      <div className="register-title">
        <h2>Cadastro</h2>
      </div>
      <form >
        <div>
          <label htmlFor="name">Nome Completo: </label>
          <input id="name" type="text" name="name" placeholder="Digite o seu nome" required />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input id="email" type="email" name="email" placeholder="Digite o seu e-mail" required />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input id="password" type="password" className="form-control @error('password') is-invalid @enderror" name="password" placeholder="Digite a sua senha" required />
        </div>
        <div>
          <label htmlFor="password-confirm">Repita a Senha: </label>
          <input id="password-confirm" type="password" className="form-control" name="password_confirmation" placeholder="Repita a sua senhas" required />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <Link to="/">
          Voltar
        </Link>
      </form>
    </main>
  );
}

export default Register;