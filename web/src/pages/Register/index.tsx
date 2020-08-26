import React, { InputHTMLAttributes } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email: string,
  password: string,
}

function Register() {
  const history = useHistory();

  function handleSubmit(values: InputProps) {
    axios.post('http://localhost:8080/v1/api/user', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('app-token', data)
          history.push('/login')
        }
      })
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  });

  return (
    <main className="register">
      <div className="register-title">
        <h2>Cadastro</h2>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validations}
        >
        <Form>
          <div>
            <div>
              <Field
                name="fullName"
                className=""
              />
              <ErrorMessage
                component="span"
                name="fullName"
              />
            </div>
            <div>
              <Field
                name="email"
                className=""
              />
              <ErrorMessage
                component="span"
                name="email"
              />
            </div>
            <div>
              <Field
                name="password"
                className=""
              />
              <ErrorMessage
                component="span"
                name="password"
              />
            </div>
          </div>
          <button type="submit">
            Login
          </button>
        </Form>
      </Formik>
      <Link to="/">
          Voltar
        </Link>
      {/* <form >
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

      </form> */}
    </main>
  );
}

export default Register;