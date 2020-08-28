import React, { InputHTMLAttributes } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email: string,
  password: string,
}

function Login() {
  const history = useHistory();
  // Loga no sistema
  function handleSubmit(values: InputProps) {
    api.post('/auth', values)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('app-token', data)
          history.push('/transaction')
        }
      })
      .catch(() => {
        alert('Erro no login');
      });

  }

  // Valida informações básicas
  const validations = yup.object().shape({
    email: yup.string().email('Esse e-mail é inválido').required('E-mail obrigatório'),
    password: yup.string().min(8).required('A senha é obrigatória')
  });

  return (
    <div className="login">
      <div className="login-form-wrapper">
        <div className="login-title">
          <h2>Login</h2>
          <Link to="/register">
            Inscreva-se
          </Link>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form>
            <div>
              <Field
                name="email"
                className=""
                placeholder="E-mail"
              />
              <ErrorMessage
                component="span"
                name="email"
              />
              <Field
                name="password"
                type="password"
                className=""
                placeholder="Senha"
              />
              <ErrorMessage
                component="span"
                name="password"
              />
            </div>
            <button type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;