import React, { useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

import './styles.css';
import { FormatNumber } from '../../utils/FormatNumber';

interface TransactionProps {
  price: string,
  name: string,
  transaction: string
}

function Transaction() {
  // const [ operation, setOperation ] = useState('');
  // const [ price, setPrice ] = useState('');
  // const [ name, setName ] = useState('');

  function handleCreateTransaction(e: TransactionProps) {
  }

  return (
    <main id="transaction">
      <div>
        <h2 className="transaction-title">Cadastrar Transação</h2>
      </div>
      <Formik
        initialValues={{ price: '', name: '', transaction: '' }}
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
      <button>
        Saldo
      </button>
    </main>
  );
}

export default Transaction;