import React, { InputHTMLAttributes } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup'
// import axios from 'axios';
import { useHistory } from 'react-router-dom';


import './styles.css';
import api from '../../services/api';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  email: string,
  password: string,
}

function Login() {
  const history = useHistory();
  // const handleSubmit = values => console.log(values);

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

    // axios.post('http://localhost:8080/v1/api/auth', values)
    //   .then(resp => {
    //     const { data } = resp
    //     if (data) {
    //       localStorage.setItem('app-token', data)
    //       history.push('/transaction')
    //     }
    //   })
  }

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

        {/* <form action="">
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
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default Login;