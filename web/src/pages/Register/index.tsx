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

function Register() {
  const history = useHistory();
  // Cria um novo cadastro
  function handleSubmit(values: InputProps) {

    api.post('user', values)
      .then(resp => {
        const { data } = resp;
        if (data) {
          history.push('/login')
        }
      })
      .catch(() => {
        alert('Erro no cadastro do cliente');
      });

  }
  // Adiciona validações nos campos
  const validations = yup.object().shape({
    fullName: yup.string().min(1).required('O nome é obrigatório'),
    email: yup.string().email('Esse e-mail é inválido').required('E-mail obrigatório'),
    password: yup.string().min(8).required('A senha é obrigatória')
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

              <Field
                name="fullName"
                className=""
                placeholder="Nome Inteiro"
              />
              <ErrorMessage
                component="span"
                name="fullName"
              />

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
            Registrar
          </button>
        </Form>
      </Formik>
      <Link to="/">
        Voltar
      </Link>
    </main>
  );
}

export default Register;