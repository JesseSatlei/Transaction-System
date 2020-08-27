import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

import api from '../../services/api';

import './styles.css';

interface TransactionProps {
  price: string,
  name: string,
  transaction: string
}

function Transaction() {
  const history = useHistory();

  function handleCreateTransaction(values: TransactionProps) {
    const informations = {
      name: values['name'],
      balance: Number(values['price']),
      transaction: Number(values['transaction'])
    }

    api.post('transaction', informations)
      .then(resp => {
        const { data } = resp;
        if (data) {
          history.push('/list-transaction');
        }
      })
      .catch(() => {[
        alert('Ocorreu erro na transação.')
      ]});
    // axios.post('http://localhost:8080/v1/api/transaction', informations)
    //   .then(resp => {
    //     const { data } = resp;
    //     if (data) {
    //       history.push('/list-transaction');
    //     }
    //   })
  }

  return (
    <main id="transaction">
      <div>
        <h2 className="transaction-title">Cadastrar Transação</h2>
      </div>
      <Formik
        initialValues={{ price: '0', name: '', transaction: '' }}
        onSubmit={handleCreateTransaction}
      >
        <Form>
          <div className="input-block">

            <Field
              name="price"
              className=""
              placeholder="Valor"
            />
            <Field
              name="name"
              className=""
              placeholder="Nome"
            />
          </div>
          <div className="select-block">
            <Field name="transaction" as="select" placeholder="Tipo de Transação" >
              <option value="0">Receita</option>
              <option value="1">Resultado</option>
            </Field>
          </div>
          <button type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
      <Link to="list-transaction">
        Saldo
      </Link>
    </main>
  );
}

export default Transaction;